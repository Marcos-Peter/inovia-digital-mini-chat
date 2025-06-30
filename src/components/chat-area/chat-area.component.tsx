import { getConversations, getMessages } from '@api/api-get';
import { sendMessage } from '@api/api-post';
import { isContactTyping, simulateIncomingMessage } from '@api/mocked-api';
import type { Message } from '@api/types';
import { ChatAreaContent, ChatAreaWrapper, MessageParagraph } from '@components/chat-area';
import { ChatHeader } from '@components/chat-header';
import { ChatInput } from '@components/chat-input';
import { MessageBubbles } from '@components/chat-message-bubbles/message-bubble.component.style';
import { strings } from '@components/strings';
import React, { useCallback, useEffect, useRef, useState } from 'react';

interface ChatAreaProps {
    selectedConversationId: number;
    onClose?: () => void;
}

export const ChatArea: React.FC<ChatAreaProps> = ({ selectedConversationId, onClose }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [contactName, setContactName] = useState<string>('');
    const [isTyping, setIsTyping] = useState(false);
    const [typingDots, setTypingDots] = useState('.');
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const userName = localStorage.getItem('chatUserName') || strings.chatArea.defaultUser;

    useEffect(() => {
        let isMounted = true;
        getMessages(selectedConversationId).then((msgs) => {
            if (isMounted) setMessages(msgs);
        });

        if (getConversations) {
            getConversations().then((convs: any[]) => {
                const found = convs.find((c) => c.id === selectedConversationId);
                if (found && isMounted) setContactName(found.contact);
            });
        }

        return () => {
            isMounted = false;
        };
    }, [selectedConversationId]);

    useEffect(() => {
        const interval = setInterval(() => {
            const msg = simulateIncomingMessage(selectedConversationId);
            if (msg) setMessages((prev) => [...prev, msg]);
        }, 5000);
        return () => clearInterval(interval);
    }, [selectedConversationId]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    useEffect(() => {
        let mounted = true;
        const checkTyping = () => {
            if (!mounted) return;
            const typing = isContactTyping(selectedConversationId);
            setIsTyping(typing);
        };
        checkTyping();
        const typingInterval = setInterval(checkTyping, 500);
        const dotsInterval = setInterval(() => {
            setTypingDots((prev) => (prev.length === 3 ? '.' : prev + '.'));
        }, 500);
        return () => {
            mounted = false;
            clearInterval(typingInterval);
            clearInterval(dotsInterval);
        };
    }, [selectedConversationId]);

    const handleSend = useCallback(
        async (text: string) => {
            if (!text.trim()) return;
            const newMsg = await sendMessage(selectedConversationId, { author: userName, text });
            setMessages((prev) => [...prev, newMsg]);
        },
        [selectedConversationId, userName],
    );

    return (
        <ChatAreaWrapper>
            <ChatHeader contactName={contactName} onClose={onClose} />
            <ChatAreaContent>
                {messages.map((msg) => (
                    <MessageBubbles key={msg.id} isUserMessage={msg.author === userName}>
                        <MessageParagraph>
                            <strong>{msg.author}:</strong> {msg.text}
                        </MessageParagraph>
                    </MessageBubbles>
                ))}
                <div ref={messagesEndRef} />
            </ChatAreaContent>
            {isTyping && (
                <div style={{ padding: '8px 16px', color: '#888', fontStyle: 'italic' }}>
                    {strings.chatArea.typingIndicator.replace('{contactName}', contactName).replace('{dots}', typingDots)}
                </div>
            )}
            <ChatInput onSend={handleSend} />
        </ChatAreaWrapper>
    );
};

import { getConversations, getMessages } from '@api/api-get';
import { addNextConversation, isConversationOpened, markConversationOpened } from '@api/mocked-api';
import { type Conversation as ConversationType, type Message } from '@api/types';
import { Conversation } from '@components/conversation';
import React, { useEffect, useState } from 'react';
import { Header } from '../header';
import { strings } from '../strings';
import { Divider, SidebarContainer, SidebarConversationWrapper, SidebarUnreadIndicator } from './sidebar.component.style';

interface SidebarProps {
    selectedConversationId: number;
    onSelectConversation: (id: number) => void;
}

type ConversationWithLastMessage = ConversationType & { lastMessage?: string };

export const Sidebar: React.FC<SidebarProps> = ({ selectedConversationId, onSelectConversation }) => {
    const [conversations, setConversations] = useState<ConversationWithLastMessage[]>([]);

    useEffect(() => {
        getConversationsWithLastMessage().then(setConversations);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (addNextConversation()) {
                getConversationsWithLastMessage().then(setConversations);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <SidebarContainer>
            <Header />
            <Divider />
            <div>
                {conversations.map((conversation) => (
                    <SidebarConversationWrapper
                        key={conversation.id}
                        selected={conversation.id === selectedConversationId}
                        onClick={() => {
                            onSelectConversation(conversation.id);
                            markConversationOpened(conversation.id);
                        }}
                    >
                        <Conversation name={conversation.contact} lastMessage={conversation.lastMessage || strings.sidebar.noMessages} />
                        {!isConversationOpened(conversation.id) && <SidebarUnreadIndicator />}
                    </SidebarConversationWrapper>
                ))}
            </div>
        </SidebarContainer>
    );
};

const getConversationsWithLastMessage = async (): Promise<(ConversationType & { lastMessage?: string })[]> => {
    const conversations = await getConversations();
    const allConversations = await Promise.all(
        conversations.map(async (c) => {
            const messages: Message[] = await getMessages(c.id);
            const lastMessage = messages.length > 0 ? messages[messages.length - 1].text : strings.sidebar.noMessages;
            return { ...c, messages: [], simulatedMessages: [], lastMessage };
        }),
    );
    return allConversations;
};

import { CustomInput, InputWrapper, SendButton } from '@components/chat-input/chat-input.component.style';
import { strings } from '@components/strings';
import React, { useState } from 'react';
import { BsSendFill } from 'react-icons/bs';

interface ChatInputProps {
    onSend: (text: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;
        onSend(input);
        setInput('');
    };

    return (
        <InputWrapper>
            <CustomInput
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={strings.chatInput?.placeholder || 'Digite sua mensagem...'}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSend();
                }}
            />
            <SendButton type='button' disabled={!input.trim()} onClick={handleSend}>
                <BsSendFill size={24} />
            </SendButton>
        </InputWrapper>
    );
};

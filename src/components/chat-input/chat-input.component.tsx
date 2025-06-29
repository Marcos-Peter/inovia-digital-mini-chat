import { CustomInput, InputWrapper, SendButton } from '@components/chat-input/chat-input.component.style';
import { strings } from '@components/strings';
import React, { useState } from 'react';
import { BsSendFill } from 'react-icons/bs';

export const ChatInput: React.FC = () => {
    const [input, setInput] = useState('');

    return (
        <InputWrapper>
            <CustomInput value={input} onChange={(e) => setInput(e.target.value)} placeholder={strings.chatInput.placeholder} />
            <SendButton type='submit' disabled={!input.trim()} onClick={() => console.log('Enviar mensagem', input)}>
                <BsSendFill size={24} />
            </SendButton>
        </InputWrapper>
    );
};

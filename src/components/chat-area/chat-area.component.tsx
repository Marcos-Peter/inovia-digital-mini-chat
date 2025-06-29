import React from 'react';

import { ChatAreaWrapper } from '@components/chat-area';
import { ChatHeader } from '@components/chat-header';
import { ChatInput } from '@components/chat-input';
// import { ChatWelcomeScreen } from '@components/chat-welcome-screen';

export const ChatArea: React.FC = () => {
    return (
        <ChatAreaWrapper>
            <ChatHeader />
            {/* <ChatWelcomeScreen /> */}
            <ChatInput />
        </ChatAreaWrapper>
    );
};

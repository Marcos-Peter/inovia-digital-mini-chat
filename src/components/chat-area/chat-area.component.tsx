import React from 'react';

import { ChatAreaWrapper } from '@components/chat-area';
import { ChatHeader } from '@components/chat-header';
// import { ChatWelcomeScreen } from '@components/chat-welcome-screen';

export const ChatArea: React.FC = () => {
    return (
        <ChatAreaWrapper>
            <ChatHeader />
            {/* <ChatWelcomeScreen /> */}
        </ChatAreaWrapper>
    );
};

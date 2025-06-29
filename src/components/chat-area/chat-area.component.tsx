import React from 'react';

import { ChatAreaWrapper } from '@components/chat-area';
import { ChatWelcomeScreen } from '@components/chat-welcome-screen';
import type { ChatType } from '../../types/chat.type';

export const ChatArea: React.FC<ChatType> = ({ id }) => {
    return (
        <ChatAreaWrapper>
            <ChatWelcomeScreen />
        </ChatAreaWrapper>
    );
};

import React from 'react';

import { ChatAreaWrapper } from '@components/chat-area';
import type { ChatType } from '../../types/chat.type';

export const ChatArea: React.FC<ChatType> = () => {
    return <ChatAreaWrapper></ChatAreaWrapper>;
};

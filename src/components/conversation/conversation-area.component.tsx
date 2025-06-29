import React from 'react';

import { Conversation, ConversationWrapper } from '@components/conversation';

export const ConversationArea: React.FC = () => {
    return (
        <ConversationWrapper>
            <Conversation name={'Marcos Peter'} lastMessage={'Olá!'} />
        </ConversationWrapper>
    );
};

import { ChatHeaderContainer, ChatHeaderWrapper } from '@components/chat-header';
import { ConversationImage, ConversationImageName, ConversationName } from '@components/conversation';
import { getNameInitialLetter } from '@utils/get-name-initial-letter';
import React from 'react';

export const ChatHeader: React.FC = () => {
    return (
        <ChatHeaderWrapper>
            <ChatHeaderContainer>
                <ConversationImage>
                    <ConversationImageName>{getNameInitialLetter('Marcos Peter')}</ConversationImageName>
                </ConversationImage>
                <ConversationName>Marcos Peter</ConversationName>
            </ChatHeaderContainer>
        </ChatHeaderWrapper>
    );
};

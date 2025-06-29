import {
    ConversationContainer,
    ConversationContentContainer,
    ConversationImage,
    ConversationImageName,
    ConversationName,
    ConversationPreview,
} from '@components/conversation/conversation-area.component.style';
import { getNameInitialLetter } from '@utils/get-name-initial-letter';
import { trimName } from '@utils/trim-conversation-name';
import { trimMessage } from '@utils/trim-conversation-preview';
import React from 'react';
import type { ConversationType } from '../../types/conversation';

export const Conversation: React.FC<ConversationType> = ({ name, lastMessage }) => {
    return (
        <ConversationContainer>
            <ConversationImage>
                <ConversationImageName>{getNameInitialLetter(name)}</ConversationImageName>
            </ConversationImage>
            <ConversationContentContainer>
                <ConversationName>{trimName(name)}</ConversationName>
                <ConversationPreview>{trimMessage(lastMessage)}</ConversationPreview>
            </ConversationContentContainer>
        </ConversationContainer>
    );
};

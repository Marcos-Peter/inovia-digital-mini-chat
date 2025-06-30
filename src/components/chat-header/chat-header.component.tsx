import { ChatHeaderWrapper, CloseIcon, FlexHeaderContainer, FlexHeaderLeft, FlexHeaderRight } from '@components/chat-header';
import { ConversationImage, ConversationImageName, ConversationName } from '@components/conversation';
import { getNameInitialLetter } from '@utils/get-name-initial-letter';
import React from 'react';

interface ChatHeaderProps {
    contactName: string;
    onClose?: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ contactName, onClose }) => {
    return (
        <ChatHeaderWrapper>
            <FlexHeaderContainer>
                <FlexHeaderLeft>
                    <ConversationImage>
                        <ConversationImageName>{getNameInitialLetter(contactName)}</ConversationImageName>
                    </ConversationImage>
                    <ConversationName>{contactName}</ConversationName>
                </FlexHeaderLeft>
                <FlexHeaderRight>
                    <CloseIcon size={32} onClick={onClose} />
                </FlexHeaderRight>
            </FlexHeaderContainer>
        </ChatHeaderWrapper>
    );
};

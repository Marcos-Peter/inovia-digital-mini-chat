import React from 'react';

import Logo from '@assets/icons/favicon.ico';
import { ContentWrapper, MainIcon, SelectConversationText, WelcomeMessage } from '@components/chat-welcome-screen';
import { strings } from '@components/strings';

export const ChatWelcomeScreen: React.FC = () => {
    return (
        <ContentWrapper>
            <MainIcon src={Logo} />
            <WelcomeMessage>{strings.welcomeScreen.welcomeMessage}</WelcomeMessage>
            <SelectConversationText>{strings.welcomeScreen.selectAConversation}</SelectConversationText>
        </ContentWrapper>
    );
};

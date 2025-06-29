import React from 'react';

import { ContentWrapper, MainIcon, SelectConversationText, WelcomeMessage } from '@components/chat-welcome-screen';
import { strings } from '@components/strings';
import Logo from '../../../public/favicon.ico';

export const ChatWelcomeScreen: React.FC = () => {
    return (
        <ContentWrapper>
            <MainIcon src={Logo} />
            <WelcomeMessage>{strings.welcomeScreen.welcomeMessage}</WelcomeMessage>
            <SelectConversationText>{strings.welcomeScreen.selectAConversation}</SelectConversationText>
        </ContentWrapper>
    );
};

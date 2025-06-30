import Logo from '@assets/icons/favicon.ico';
import React from 'react';
import { strings } from '../strings';
import { HeaderContainer, HeaderIcon, HeaderTitle, HeaderTitleWrapper } from './header.component.style';

export const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <HeaderTitleWrapper>
                <HeaderIcon src={Logo} />
                <HeaderTitle>{strings.appTitle}</HeaderTitle>
            </HeaderTitleWrapper>
        </HeaderContainer>
    );
};

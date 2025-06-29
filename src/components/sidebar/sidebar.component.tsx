import React from 'react';
import { Header } from '../header';
import { Divider, SidebarContainer } from './sidebar.component.style';

export const Sidebar: React.FC = () => {
    return (
        <SidebarContainer>
            <Header />
            <Divider />
        </SidebarContainer>
    );
};

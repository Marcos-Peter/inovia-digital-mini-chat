import Logo from '@assets/icons/favicon.ico';
import {
    LoginInfoWrapper,
    MainIcon,
    WelcomeButton,
    WelcomeError,
    WelcomeForm,
    WelcomeInput,
    WelcomeMessage,
} from '@components/chat-welcome-screen';
import { strings } from '@components/strings';
import React, { useState } from 'react';

interface WelcomeNameScreenProps {
    onNameSubmit: (name: string) => void;
}

export const WelcomeNameScreen: React.FC<WelcomeNameScreenProps> = ({ onNameSubmit }) => {
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) {
            setError(strings.welcomeScreen.nameScreen.error);
            return;
        }
        localStorage.setItem('chatUserName', name.trim());
        onNameSubmit(name.trim());
    };

    return (
        <LoginInfoWrapper>
            <MainIcon src={Logo} />
            <WelcomeMessage>{strings.welcomeScreen.nameScreen.welcome}</WelcomeMessage>
            <WelcomeForm onSubmit={handleSubmit}>
                <WelcomeInput
                    type='text'
                    placeholder={strings.welcomeScreen.nameScreen.placeholder}
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        setError('');
                    }}
                    autoFocus
                />
                <WelcomeButton type='submit'>{strings.welcomeScreen.nameScreen.button}</WelcomeButton>
                {error && <WelcomeError>{error}</WelcomeError>}
            </WelcomeForm>
        </LoginInfoWrapper>
    );
};

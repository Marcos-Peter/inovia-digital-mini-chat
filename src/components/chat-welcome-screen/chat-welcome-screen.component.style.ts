import styled from 'styled-components';

export const ContentWrapper = styled.article`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    width: calc(100vw - 22rem);
    position: fixed;
    left: 22rem;
    top: 0;
`;

export const LoginInfoWrapper = styled.article`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
`;

export const MainIcon = styled.img`
    width: 6rem;
    height: 6rem;
`;

export const WelcomeMessage = styled.h2`
    font-weight: 600;
    font-size: 1.5rem;
    margin: 0;
`;

export const SelectConversationText = styled.p`
    font-size: 1rem;
    margin: 0;
`;

export const WelcomeForm = styled.form`
    width: 100%;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const WelcomeInput = styled.input`
    padding: 12px;
    font-size: 18px;
    border-radius: 8px;
    border: 1px solid #ccc;
    outline: none;
`;

export const WelcomeButton = styled.button`
    padding: 12px;
    font-size: 18px;
    border-radius: 8px;
    background: #2d8cff;
    color: #fff;
    border: none;
    cursor: pointer;
`;

export const WelcomeError = styled.span`
    color: red;
    font-size: 14px;
`;

import styled from 'styled-components';

export const InputWrapper = styled.div`
    width: 70dvw;
    display: flex;
    column-gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    right: 0;

    @media (max-width: 1200px) {
        width: 90dvw;
    }
`;

export const CustomInput = styled.input`
    width: 65%;
    height: 3rem;
    border-radius: 1.5rem;
    border: 1px solid rgba(51, 57, 87, 0.2);
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.1rem;

    border: 1px solid #d1d5db;

    &:focus {
        border-color: #3b82f6;
        outline: none;
    }

    @media (max-width: 1200px) {
        width: 50%;
    }
`;

export const SendButton = styled.button`
    width: 5rem;
    height: 3rem;
    border-radius: 1.5rem;
    background-color: #719fe0;
    color: #f3f3f3;
    cursor: pointer;
    border: none;

    &:hover:not(:disabled) {
        background: linear-gradient(to right, #2563eb, #1d4ed8);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

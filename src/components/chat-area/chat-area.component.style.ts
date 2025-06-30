import styled from 'styled-components';

export const ChatAreaWrapper = styled.div`
    position: fixed;
    left: 22rem;
    right: 0;
    top: 7rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 85vh;
    justify-content: space-between;
    overflow: hidden;
    padding-left: 3rem;
    padding-right: 3rem;

    @media (max-width: 992px) {
        position: fixed;
        top: 5rem;
        left: 0;
        right: 0rem;
        width: 90vw;
        height: 90vh;
        z-index: 1000;
        background: #fff;
    }
`;

export const ChatAreaContent = styled.div`
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;

export const MessageParagraph = styled.p`
    margin: 0;
`;

export const TypingIndicator = styled.div`
    min-height: 2rem;
    color: #888;
    font-size: 1rem;
    margin-left: 0.5rem;
    margin-bottom: 0.2rem;
`;

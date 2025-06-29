import styled from 'styled-components';

export const ChatAreaWrapper = styled.div`
    position: fixed;
    left: 22rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100vh;
    justify-content: space-between;
    width: 100dvw;
    overflow: hidden;

    @media (max-width: 992px) {
        display: none;
    }
`;

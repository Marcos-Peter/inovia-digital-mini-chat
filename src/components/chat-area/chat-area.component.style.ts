import styled from 'styled-components';

export const ChatAreaWrapper = styled.div`
    display: flex;
    margin-left: 22rem;
    width: 100%;
    flex: 1;
    height: 100vh;

    justify-content: center;

    @media (max-width: 992px) {
        display: none;
    }
`;

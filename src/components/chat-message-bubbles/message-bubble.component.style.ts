import styled from 'styled-components';

export const MessageBubbles = styled.div<{
    isUserMessage: boolean;
}>`
    max-width: 40%;
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;
    background-color: ${(props) => (props.isUserMessage ? '#0972c9' : '#46a1ec')};
    align-self: ${(props) => (props.isUserMessage ? 'flex-end' : 'flex-start')};
    margin: 0.5rem 0;
    color: #f3f3f3;
    font-size: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

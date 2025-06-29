import styled from 'styled-components';

export const ConversationWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0;
    cursor: pointer;

    :hover {
        background-color: #ebf0f7;
    }
`;

export const ConversationContainer = styled.div`
    display: flex;
    align-items: center;
    height: 5rem;
    flex-direction: row;
    border-bottom: 1px solid rgba(51, 57, 87, 0.2);
    padding: 0.5rem;
    padding-bottom: 1rem;
    gap: 1.5rem;
`;

export const ConversationImage = styled.div`
    border-radius: 100%;
    min-width: 3rem;
    height: 3rem;
    background-color: #719fe0;
    text-align: center;
    padding: 0.5rem;
`;

export const ConversationImageName = styled.span`
    font-size: 2.5rem;
    color: #f3f3f3;
`;

export const ConversationContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 70%;
`;

export const ConversationName = styled.p`
    font-size: 1.3rem;
    font-weight: 700;
    margin: 0;
`;

export const ConversationPreview = styled.p`
    font-size: 1rem;
    margin: 0;
`;

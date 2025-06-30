import { IoClose } from 'react-icons/io5';
import styled from 'styled-components';

export const ChatHeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 22rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 5.2rem;
    padding-left: 2rem;
    background-color: #fdf9f9;
    box-shadow: 3px 0 6px rgba(3, 52, 116, 0.15);

    @media (max-width: 992px) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100vw;
        height: 5.2rem;
        z-index: 1000;
        background: #fff;
    }
`;

export const ChatHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const FlexHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const FlexHeaderLeft = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    gap: 1rem;
`;

export const FlexHeaderRight = styled.div`
    position: absolute;
    right: 27rem;
    z-index: 1000;
    display: flex;
    align-items: center;

    @media (max-width: 992px) {
        right: 3rem;
    }
`;

export const CloseIcon = styled(IoClose)`
    cursor: pointer;
    color: #333957;
`;

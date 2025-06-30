import styled from 'styled-components';

export const SidebarContainer = styled.aside`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 22rem;
    flex-direction: column;
    height: 100vh;
    background-color: #fdf9f9;
    box-shadow: 3px 0 6px rgba(3, 52, 116, 0.15);
    z-index: 10;

    @media (max-width: 992px) {
        width: 100vw;
    }
`;

export const Divider = styled.hr`
    background-color: rgba(51, 57, 87, 0.2);
    width: 100%;
    height: 1px;
    margin: 0;
`;

export const SidebarConversationWrapper = styled.div<{ selected: boolean }>`
    position: relative;
    background: ${({ selected }) => (selected ? '#ebf0f7' : 'transparent')};
    cursor: pointer;
    display: flex;
    align-items: center;
    &:hover {
        background: #f5f8fc;
    }
`;

export const SidebarUnreadIndicator = styled.span`
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #2d8cff;
    box-shadow: 0 0 4px #2d8cff44;
    display: inline-block;
`;

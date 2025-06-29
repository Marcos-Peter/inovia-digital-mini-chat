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

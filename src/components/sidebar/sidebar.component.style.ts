import styled from 'styled-components';

export const SidebarContainer = styled.aside`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 22rem;
    flex-direction: column;
    min-height: 100vh;
    background-color: #ebedf5;
    padding-left: 0.4rem;
    padding-right: 0.4rem;

    @media (max-width: 992px) {
        width: 100vw;
    }
`;

export const Divider = styled.hr`
    color: #333957;
    width: 100%;
    height: 1px;
`;

import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 22rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: none;
    padding-left: 1rem;
    padding-right: 1rem;

    @media (max-width: 992px) {
        width: 100vw;
    }
`;

export const HeaderTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
`;

export const HeaderIcon = styled.img`
    height: 3rem;
    width: auto;
`;

export const HeaderTitle = styled.h1`
    color: #333957;
    font-size: 1.8rem;
`;

import styled from 'styled-components';

export const MainContainer = styled.div<{background: string}>`
    height: 100%;
    width: 100%;
    background: url(${props => props.background}) no-repeat center center;
    background-size: cover;
`;

export const InfoContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    background-color: ${props => props.theme.colors.darkGrey};

    &:hover {
        opacity: 1;
    }
`;


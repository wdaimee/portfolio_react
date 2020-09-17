import styled from 'styled-components';
import Background from '../../images/background.jpg';

export const Container = styled.div`
    min-height: 100vh;
    width: 100vw;
    background: url(${Background}) no-repeat center center fixed;
    background-size: cover;
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }
`;

export const Header = styled.h1`
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 5rem;
    color: ${props => props.theme.colors.green};
    text-shadow: 0.125rem 0.125rem #000;
    z-index: 1;
`;

export const Title = styled(Header)`
    font-size: 2.5rem;
`;
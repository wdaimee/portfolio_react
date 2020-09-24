import styled from 'styled-components';

export const MainContainer = styled.div`
    @media (min-width: 768px) { 
        height: 100vh;
    }
`;

export const Header = styled.div`
    box-sizing: border-box;
    padding: 1.9375rem 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.background};
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 2.5rem;
    text-shadow: 0.125rem 0.125rem #000;
    color: ${props => props.theme.colors.green};
    text-transform: uppercase;
`;

export const ProjectContainer = styled.div`
    width: 100%;
    height: 300vh;
    padding-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-row-gap: 1rem;
    justify-items: center;

    @media (min-width: 768px) {
        height: calc(100vh - 6.8125rem);
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-row-gap: 0;
        padding-bottom: 0;
    }
`;




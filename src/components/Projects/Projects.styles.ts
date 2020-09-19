import styled from 'styled-components';

export const MainContainer = styled.div`
    height: 100vh;
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
    color: ${props => props.theme.colors.green}
`;

export const ProjectContainer = styled.div`
    width: 100%;
    height: calc(100vh - 6.375rem);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`;
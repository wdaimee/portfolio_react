import React from 'react';
import { Container, Header, Title, StyledIcon } from './Welcome.styles';

export const Welcome: React.FC<any> = props => {
    return(
        <Container>
            <Header>Waqas Daimee</Header>
            <Title>Fullstack Developer</Title>
            <StyledIcon icon="arrowDown" size="50px" color="green" />
        </Container>
    )
};
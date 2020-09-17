import React from 'react';
import { Container, Header, Title } from './Welcome.styles';

export const Welcome: React.FC<any> = props => {
    return(
        <Container>
            <Header>Waqas Daimee</Header>
            <Title>Fullstack Developer</Title>
        </Container>
    )
};
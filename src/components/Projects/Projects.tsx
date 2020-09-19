import React from 'react';
import { MainContainer, ProjectContainer, Header, Title } from './Projects.styles';
import { Card } from '../Card/Card';

export const Projects: React.FC<any> = props => {
    return(
        <MainContainer>
            <Header>
                <Title>My Projects</Title>
            </Header>
            <ProjectContainer>
                <Card backgroundLink='https://i.imgur.com/NtBLa1R.png' />
            </ProjectContainer>
        </MainContainer>
    )
};
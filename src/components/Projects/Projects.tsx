import React from 'react';
import { MainContainer, ProjectContainer, Header, Title } from './Projects.styles';

export const Projects: React.FC<any> = props => {
    return(
        <MainContainer>
            <Header>
                <Title>My Projects</Title>
            </Header>
            <ProjectContainer>
            </ProjectContainer>
        </MainContainer>
    )
};
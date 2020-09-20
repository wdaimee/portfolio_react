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
                <Card title='Todos - Fullstack'
                      backgroundLink='https://i.imgur.com/NtBLa1R.png'
                      description='Todos is a Fullstack app built with React.js with TypeScript for the Frontend, Nest.js 
                                   with TypeScript and GraphQL for the Backend, and this app uses a PostgreSQL database. 
                                   User login and signup was handled with Passport JWT authentication. 
                                   Users are able to create a todo, edit, or delete a todo. On the Home Page, users can see any up 
                                   coming todos while on the History Page, users can view a list of all of their todos (past, present, and future). 
                                   To check out the app, sign up or login as a guest.'
                      icons={["reactIcon", "tsLogo", "apolloLogo", "nestLogo"]}
                />
                <Card title='gUber MERN Fullstack' 
                      backgroundLink='https://i.imgur.com/WSirEb4.png'
                      description='gÜber - The Goalie Rental App is a MERN Fullstack application where users can signup 
                                   to find goalies who can fill their sport games. Users can also sign up to play as a 
                                   goalie and find games to fill. This Fullstack app uses a React.js Front End with a 
                                   modified Back End from the Goalie Rental App RESTful API seen below. You can login 
                                   with the following credentials:
                                   
                                   Username: user@gmail.com
                                   
                                   Password: User123'
                      icons={["reactIcon"]}
                />
                <Card title="Dealish Django Fullstack" 
                      backgroundLink='https://i.imgur.com/vJEp2OW.png'
                      icons={["reactIcon"]} 
                />
            </ProjectContainer>
        </MainContainer>
    )
};
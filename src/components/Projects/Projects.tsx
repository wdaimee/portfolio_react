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
                      icons={["reactIcon", "tsLogo", "apolloLogo", "nestLogo", "graphQLIcon", "postgreSQLLogo", "herokuIcon"]}
                      webSiteLink="https://afternoon-wave-77442.herokuapp.com/"
                      githubLink="https://github.com/wdaimee/Todos-Nestjs"
                />
                <Card title='gÜber MERN Fullstack' 
                      backgroundLink='https://i.imgur.com/WSirEb4.png'
                      description='gÜber - The Goalie Rental App is a MERN Fullstack application where users can signup 
                                   to find goalies who can fill their sport games. Users can also sign up to play as a 
                                   goalie and find games to fill. This Fullstack app uses a React.js Front End with a 
                                   modified Back End from the Goalie Rental App RESTful API seen below. You can login 
                                   with the following credentials:
                                   
                                   Username: user@gmail.com
                                   
                                   Password: User123'
                      icons={["reactIcon", "nodeIcon", "expressIcon", "mongoDBIcon", "bootstrapIcon", "jsIcon", "herokuIcon"]}
                      webSiteLink="https://guber-rental.herokuapp.com/"
                      githubLink="https://github.com/wdaimee/Goalie-Rental-App-React"
                />
                <Card title="Dealish Django Fullstack" 
                      backgroundLink='https://i.imgur.com/vJEp2OW.png'
                      description='Dealish is a Fullstack web app where users can find deals and happy hours in their area. 
                                   Goole Maps API and Geolocation is used to locate the user and display the closest deals to them.
                                   User authenication is implemented with the Django default authenication system. Logged in users can 
                                   add, edit, and delete restaurant reviews and also add restaurants to a list of favourites. You can login with the following credentials:

                      Username: user
                      
                      Password: Dealish123'
                      icons={["reactIcon", "postgreSQLLogo", "cssIcon", "bootstrapIcon", "jsIcon", "herokuIcon"]} 
                      webSiteLink="https://dealish.herokuapp.com/"
                      githubLink="https://github.com/wdaimee/Dealish"
                />
                <Card title="The Goalie Rental App - RESTful API"
                      backgroundLink='https://i.imgur.com/XbKcBEP.png'
                      description='A restful API that will be used as a backend for a React Frontend, this backend API was created with Node.js and Express.js. 
                      The website below can be accessed to view the Documentation for the API. The documentation website was built with HTML, CSS, and Bootstrap 4. 
                      Backend routes and data can be viewed by following the directions for each section, you will get back a JSON response body which will be displayed below. 
                      The JSON response body was fetched using AJAX requests.'
                      icons={["nodeIcon", "expressIcon", "mongoDBIcon", "htmlIcon", "cssIcon", "bootstrapIcon", "herokuIcon"]}
                      webSiteLink="https://goalie-rental-app.herokuapp.com/api/docs"
                      githubLink="https://github.com/wdaimee/Goalie-Rental-App-Docs"
                />
                <Card title="Websocket Chat"
                      backgroundLink="https://i.imgur.com/SLwWQxX.png"
                      description="Websocket chat is a an app that allows two or more clients to communciate in a chat room. Node.js and Express.js were used as the backend 
                      for the project and socket.io was used to implement websockets and communication between multiple clients. The frontend for the project was completed using ejs."
                      icons={["nodeIcon", "expressIcon", "htmlIcon", "cssIcon", "bootstrapIcon", "jsIcon", "herokuIcon"]}
                      webSiteLink="https://thawing-falls-22320.herokuapp.com/"
                      githubLink="https://github.com/wdaimee/Websocket-chat-app"
                />
                <Card title="Old School Cool Air Hockey Game"
                      backgroundLink="https://i.imgur.com/7IVL5ZC.png" 
                      description="A two player air hockey game, best of 7 built with HTML Canvas, CSS, and JavaScript. Players can use keyboard controls to move the paddles and attempt 
                      to score on their opponents. Collision detection was used between the pucks and the paddles to change the direction of the puck when struck with the paddle or walls. 
                      This page is a Single Page Application (SPA), JavaScript DOM manipulation with jQuery was used to hide/show content on the screen."
                      icons={["jsIcon", "jQueryIcon", "htmlIcon", "cssIcon"]}
                      webSiteLink="https://wdaimee.github.io/Air-Hockey-Game/"
                      githubLink="https://github.com/wdaimee/Air-Hockey-Game"
                />
            </ProjectContainer>
        </MainContainer>
    )
};
import React from 'react';
import { IconType } from '../../ui/Icon/Icon';
import { MainContainer, InfoContainer } from './Card.styles';

interface CardProps {
    backgroundLink: string,
    webSiteLink?: string,
    githubLink?: string,
    icons?: IconType[]
}

export const Card: React.FC<CardProps> = ({ backgroundLink, webSiteLink, githubLink, icons }) => {
  return(
    <>
        <MainContainer background={backgroundLink}>
            <InfoContainer />
        </MainContainer>
    </>
  )  
};
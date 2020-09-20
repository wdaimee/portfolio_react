import React from 'react';
import { IconType } from '../../ui/Icon/Icon';
import { MainContainer, 
         InfoContainer, 
         Title, 
         DescriptionContainer,
         StyledP,
         IconContainer,
         StyledIcon } from './Card.styles';

interface CardProps {
    title: string,
    description?: string,
    backgroundLink: string,
    webSiteLink?: string,
    githubLink?: string,
    icons: IconType[]
}

export const Card: React.FC<CardProps> = ({ title, description, backgroundLink, webSiteLink, githubLink, icons }) => {
  return(
    <>
        <MainContainer background={backgroundLink}>
            <InfoContainer>
                <Title>{title}</Title>
                <DescriptionContainer>
                    <StyledP>{description}</StyledP>
                </DescriptionContainer>
                <IconContainer>
                    {icons.map(icon => (
                        <StyledIcon icon={icon} size="2.5rem" color="white"/>
                    ))}
                </IconContainer>
            </InfoContainer>
        </MainContainer>
    </>
  )  
};
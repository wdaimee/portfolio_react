import React from 'react';
import { IconType } from '../../ui/Icon/Icon';
import { MainContainer, 
         InfoContainer, 
         Title, 
         DescriptionContainer,
         StyledP,
         IconContainer,
         StyledIcon,
         ButtonContainer } from './Card.styles';
import { Button } from '../../ui/Button/Button';

interface CardProps {
    title: string,
    description?: string,
    backgroundLink: string,
    webSiteLink: string,
    githubLink: string,
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
                        <StyledIcon key={icon} icon={icon} size="3.0rem" color="white"/>
                    ))}
                </IconContainer>
                <ButtonContainer>
                    <Button link={webSiteLink} size="9.2rem">View the Site</Button>
                    <Button link={githubLink} size="9.2rem">See the Code</Button>
                </ButtonContainer>
            </InfoContainer>
        </MainContainer>
    </>
  )  
};
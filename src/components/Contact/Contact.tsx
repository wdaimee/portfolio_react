import React from 'react';
import { MainContainer, 
         Footer, 
         Subtitle, 
         StyledInput, 
         FormContainer, 
         StyledTextArea,
         ContentContainer,
         SubmitButton,
         IconContainer,
         StyledIcon,
         FooterTitle } from './Contact.styles';
import { Header, Title } from '../Projects/Projects.styles';
import pdf from '../../PDF/Waqas Daimee Resume.pdf';

export const Contact: React.FC<any> = props => {
    return(
        <MainContainer>
            <Header>
                <Title>Contact</Title>
            </Header>
            <ContentContainer>
                <Subtitle>Have a question or want to connect?</Subtitle>
                <FormContainer>
                    <form style={{width: '100%'}}>
                        <StyledInput type="text" placeholder="Your Name" />
                        <StyledInput type="email" placeholder="Your email" />
                        <StyledTextArea name="subject" placeholder="Subject" />
                        <SubmitButton type="submit" value="submit" />
                    </form>
                </FormContainer>
            </ContentContainer>
            <Footer>
                <IconContainer>
                    {/* eslint-disable-next-line */}
                    <a target="_blank" href="https://www.github.com/wdaimee">
                        <StyledIcon icon="githubLogo" size="2.5rem" color="green" />
                    </a>
                    {/* eslint-disable-next-line */}
                    <a target="_blank" href="https://linkedin.com/in/waqas-daimee">
                        <StyledIcon icon="linkedinLogo" size="2.5rem" color="green" />
                    </a>
                    {/* eslint-disable-next-line */}
                    <a target="_blank" href={pdf}>
                        <StyledIcon icon="pdfLogo" size="2.5rem" color="green" />
                    </a>
                </IconContainer>
                <FooterTitle>Waqas Daimee</FooterTitle>
                <FooterTitle>wdaimee@gmail.com</FooterTitle>
            </Footer>
        </MainContainer>
    )
}
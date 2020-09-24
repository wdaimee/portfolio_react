import React, { useState } from 'react';
import emailjs from 'emailjs-com';
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

// Change ENV variables from 'string | undefined' to 'string' to eliminate
// TS error
declare const process : {
    env: {
        REACT_APP_EMAILJS_SERVICEID: string,
        REACT_APP_EMAILJS_TEMPLATEID: string,
        REACT_APP_EMAILJS_USERID: string
    }
}

export const Contact: React.FC<any> = props => {
    // const [formSubmitted, setFormSubmitted] = useState(false);
    const [emailState, setEmailState] = useState({
        name: "",
        email: "",
        subject: ""
    });

    // Handle change of inputs in form element
    const handleChange = (evt: any) => {
        const value = evt.target.value;
        setEmailState({
            ...emailState,
            [evt.target.name]: value
        })
    }

    // Handle submitting of form
    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        // Get service id from environment variables
        const serviceId: string = process.env.REACT_APP_EMAILJS_SERVICEID;
        // Get templte id from environment variables
        const templateId: string = process.env.REACT_APP_EMAILJS_TEMPLATEID;
        // Get user id from environment variables
        const userId: string = process.env.REACT_APP_EMAILJS_USERID;
        const params ={
            from_name: emailState.name,
            from_email: emailState.email,
            message: emailState.subject
        }

        // Submit form and send email to gmail account
        emailjs.send(serviceId, templateId, params, userId)
        .then((res: any) => {
            console.log(res);
            alert("Thank you for connecting with me! Your email has successfully been submitted.")
        })
        .catch((err: any) => console.log(err))
    }

    return(
        <MainContainer>
            <Header>
                <Title>Contact</Title>
            </Header>
            <ContentContainer>
                <Subtitle>Have a question or want to connect?</Subtitle>
                <FormContainer>
                    <form onSubmit={handleSubmit} style={{width: '100%'}}>
                        <StyledInput name="name" 
                                     onChange={handleChange} 
                                     value={emailState.name} 
                                     type="text" 
                                     placeholder="Your Name" />
                        <StyledInput name="email" 
                                     onChange={handleChange}
                                     value={emailState.email}
                                     type="email" 
                                     placeholder="Your Email" />
                        <StyledTextArea name="subject"
                                        onChange={handleChange}
                                        value={emailState.subject} 
                                        placeholder="Subject" />
                        <SubmitButton type="submit" value="Send" />
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
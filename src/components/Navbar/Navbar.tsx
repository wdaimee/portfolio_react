import React from 'react';
import { NavContainer, DivContainer, IconContainer, StyledIcon } from './Navbar.styles';
import { Icon } from '../../ui/Icon/Icon';
import pdf from '../../PDF/Waqas Daimee Resume.pdf';

export const NavBar: React.FC<any> = props => {
    return(
        <NavContainer>
            <DivContainer>
                <Icon icon="wdLogo" color='green'/>
                <IconContainer>
                    {/* eslint-disable-next-line */}
                    <a target="_blank" href="https://www.github.com/wdaimee">
                        <StyledIcon icon="githubLogo" size="40px" color="green" />
                    </a>
                    {/* eslint-disable-next-line */}
                    <a target="_blank" href="https://linkedin.com/in/waqas-daimee">
                        <StyledIcon icon="linkedinLogo" size="40px" color="green" />
                    </a>
                    {/* eslint-disable-next-line */}
                    <a target="_blank" href={pdf}>
                        <StyledIcon icon="pdfLogo" size="40px" color="green" />
                    </a>
                </IconContainer>
            </DivContainer>
        </NavContainer>
    )
};
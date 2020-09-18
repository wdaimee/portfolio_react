import React from 'react';
import { NavContainer, DivContainer, IconContainer, StyledIcon } from './Navbar.styles';
import { Icon } from '../../ui/Icon/Icon';

export const NavBar: React.FC<any> = props => {
    return(
        <NavContainer>
            <DivContainer>
                <Icon icon="wdLogo" color='green'/>
                <IconContainer>
                    <StyledIcon icon="githubLogo" size="40px" color="green" />
                    <StyledIcon icon="linkedinLogo" size="40px" color="green" />
                    <StyledIcon icon="pdfLogo" size="40px" color="green" />
                </IconContainer>
            </DivContainer>
        </NavContainer>
    )
};
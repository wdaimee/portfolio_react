import React, { HTMLAttributes } from 'react';
import { StyledButton } from './Button.styles';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    size: string,
    link: string
};

export const Button: React.FC<ButtonProps> = ({ size, children, onClick, link }) => {
    return (
        // eslint-disable-next-line
        <a target="_blank" href={link}>
            <StyledButton size={size} onClick={onClick}>
                {children}
            </StyledButton>
        </a>    
    )
}


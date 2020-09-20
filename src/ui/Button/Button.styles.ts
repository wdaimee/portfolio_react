import styled from 'styled-components';
import { HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    size: string
};

export const StyledButton = styled.button<ButtonProps>`
    background-color: ${props => props.theme.colors.darkGrey};
    border: 1px solid ${props => props.theme.colors.green};
    border-radius: 0.25rem;
    color: ${props => props.theme.colors.green};
    font-size: 1.25rem;
    height: 2.2rem;
    width: ${({ size }) => size};
    box-sizing: border-box;
    cursor: pointer;
    margin: 0 0.625rem;
    &:hover {
        background-color: ${props => props.theme.colors.green};
        color: ${props => props.theme.colors.darkGrey};
    }
    &:active {
        background-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.green};
    }
    &:focus {
        outline: none;
    }
`;
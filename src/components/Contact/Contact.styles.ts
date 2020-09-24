import styled from 'styled-components';
import { Icon } from '../../ui/Icon/Icon';

export const MainContainer = styled.div`
    height: 100vh;
    position: relative;
`;

export const Footer = styled.div`
    width: 100vw;
    height: 20vh;
    background-color: ${props => props.theme.colors.darkGrey};
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const Subtitle = styled.h3`
    font-size: 1.25rem;
    color: ${props => props.theme.colors.white};
    text-align: center;
`;

export const StyledInput = styled.input`
    background-color: ${props => props.theme.colors.darkGrey};
    color: ${props => props.theme.colors.white};
    border: none;
    width: 100%;
    display: block;
    box-sizing: border-box;
    font-size: 1rem;
    margin-bottom: 0.625rem;
    padding: 0.625rem 0.625rem;

    &:focus {
        outline: none;
    }
`;

export const FormContainer = styled.div`
    width: 20rem;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        width: 31.25rem;
    }
`;

export const StyledTextArea = styled.textarea`
    background-color: ${props => props.theme.colors.darkGrey};
    color: ${props => props.theme.colors.white};
    border: none;
    width: 100%;
    height: 14.5rem;
    display: block;
    box-sizing: border-box;
    font-size: 1rem;
    margin-bottom: 0.625rem;
    padding: 0.625rem 0.625rem;

    &:focus {
        outline: none;
    }
`;

export const ContentContainer = styled.div`
    box-sizing: border-box;
    padding-top: 2.5rem;
    height: calc(100vh - (6.8125rem + 20vh));
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SubmitButton = styled.input`
    background: transparent;
    color: ${props => props.theme.colors.green};
    font-size: 1rem;
    border: 2px solid ${props => props.theme.colors.green};
    outline: none;
    padding: 0.625rem 1.875rem;
    text-transform: uppercase;
    margin: 0.3125rem 0;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.colors.green};
        color: ${props => props.theme.colors.background};
    }

    &:active {
        background-color: ${props => props.theme.colors.white};
    }
`;

export const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const StyledIcon = styled(Icon)`
    margin: 0 25px;
    &:hover {
        filter: brightness(1.5);
        cursor: pointer;
    }
`;

export const FooterTitle = styled(Subtitle)`
    color: ${props => props.theme.colors.green};
    margin: 0;
`;
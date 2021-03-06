import styled from 'styled-components';
import { Icon } from '../../ui/Icon/Icon';

export const MainContainer = styled.div<{background: string}>`
    position: relative;
    height: 100%;
    width: 80%;
    background: url(${props => props.background}) no-repeat center center;
    background-size: cover;

    @media (min-width: 768px) {
        width: 100%;
    }
`;

export const InfoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 1rem 1rem;
    display: grid;
    grid-template-rows: 1fr 45% 2fr 1fr;
    opacity: 0;
    background-color: ${props => props.theme.colors.darkGrey};
    transition: opacity 0.4s ease-in-out;

    &:hover {
        opacity: 1;
    }
`;

export const Title = styled.h3`
    text-align: center;
    color: ${props => props.theme.colors.green};
    font-size: 1.5625rem;
    margin: 0;
`;

export const DescriptionContainer = styled.div`
   width: 100%;
   box-sizing: border-box;
   padding: 5px;
   border-radius: 0.25rem;
   overflow-y: scroll;
`;

export const StyledP = styled.p`
    font-size: 1.4rem;
    color: ${props => props.theme.colors.white};
    margin: 0;
`;

export const IconContainer = styled.div`
    place-self: center;
`;

export const StyledIcon = styled(Icon)`
    margin: 0 0.3125rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
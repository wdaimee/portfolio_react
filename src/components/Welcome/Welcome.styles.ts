import styled, { keyframes } from 'styled-components';
import Background from '../../images/background.jpg';
import { Icon } from '../../ui/Icon/Icon';

export const Container = styled.div`
    min-height: 100vh;
    width: 100vw;
    background: url(${Background}) no-repeat center center fixed;
    background-size: cover;
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }
`;

export const Header = styled.h1`
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 5rem;
    color: ${props => props.theme.colors.green};
    text-shadow: 0.125rem 0.125rem #000;
    z-index: 1;
`;

// Keyframes for typewriter effect
const TypeWritterFrames = keyframes`
    from {
        width: 0;
    }

    to {
        width: 8.9em;
    }
`;

// Keyframes for blinking cursor animation
const BlinkCursorFrames = keyframes`
    from {
        border-right-color: 2px solid rgba(255, 255, 255, 0.75);
    }

    to {
        border-right-color: transparent;
    }
`;

export const Title = styled(Header)`
    font-size: 2.5rem;
    overflow: hidden;
    position: relative;
    width: 10em;
    border-right: 2px solid rgba(255, 255, 255, 0.75);
    white-space: nowrap;
    animation: ${TypeWritterFrames} 3s steps(19) 1s 1 normal both,
               ${BlinkCursorFrames} 400ms steps(44) infinite normal;
`;

const PulseKeyFrames = keyframes`
    from {
        transform: scale(1);
    }
    50% {
        transform: scale(0.85);
    }
    to {
        transform: scale(1);
    }
`;

export const StyledIcon = styled(Icon)`
    z-index: 1;
    position: relative;
    top: 15.625rem;
    animation: ${PulseKeyFrames} 2s infinite;
`;
import styled from 'styled-components';
import { Icon } from '../../ui/Icon/Icon';

export const NavContainer = styled.nav`
    box-sizing: border-box;
    background-color: rgba(32, 38, 48, 0.8);
    position: fixed;
    width: 100vw;
    z-index: 1;
    padding: 1rem 1rem;

    @media (min-width: 768px) {
        background-color: transparent;
    }
`;

export const DivContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const StyledIcon = styled(Icon)`
    margin: 0.625rem;
    &:hover {
        filter: brightness(1.5);
        cursor: pointer;
    }
`;


import React from 'react';
import styled from 'styled-components';
import { icons } from './icons';
import { Color } from '../../css/theme';

export type IconType = keyof typeof icons;

export interface IconProps extends React.HTMLAttributes<HTMLOrSVGElement> {
    icon: IconType;
    size?: string | number;
    color?: Color;
};

const BaseIcon: React.FC<IconProps> = ({ icon, ...props }) => {
    const Ikon = icons[icon];
    if (!Ikon) return null;
    return <Ikon {...props} />
};

export const Icon = styled(BaseIcon)`
    height: ${props => props.size};
    width: ${props => props.size};
    color: ${props => props.color ? props.theme.colors[props.color]: null};
`;

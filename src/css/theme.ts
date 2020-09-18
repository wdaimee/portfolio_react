import { DefaultTheme } from 'styled-components';

export type Color = 'background' | 'darkGrey' | 'green' | 'white';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            darkGrey: string,
            green: string,
            background: string,
            white: string
        }
    }
};

export const theme: DefaultTheme = {
    colors: {
        darkGrey: '#343a40',
        green: '#008899',
        background: '#202630',
        white: '#fff'
    }
};
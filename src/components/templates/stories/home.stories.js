import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core';
import Home from '../home.component';
import theme from '../../../styles/global-styles';

export const favoriteStops = [
    { id: 'Parada 1' },
    { id: 'Parada 2' },
    { id: 'Parada 3' },
    { id: 'Parada 1' },
];

export const favoriteLines = [
    { id: 'Parada 1', name: 'Son Castello' },
    { id: 'Parada 2', name: 'Son Castello' },
    { id: 'Parada 3', name: 'Son Castello' },
    { id: 'Parada 1', name: 'Son Castello' },
];

storiesOf('Templates|Home', module).add('default', () => (
    <ThemeProvider {...{ theme }}>
        <Home {...{ favoriteStops }} {...{ favoriteLines }} />
    </ThemeProvider>
));

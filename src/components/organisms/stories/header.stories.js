import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from '@material-ui/core';
import Header from '../header.component';
import theme from '../../../styles/global-styles';

const actions = {
    handleClickLogout: action('handleClickLogout'),
};

export const languages = [
    { label: 'Español', id: 'es' },
    { label: 'Cálalan', id: 'ca' },
];

export const menu = [
    { label: 'Inici', id: 'inici', path: '/inici' },
    { label: 'Targeta', id: 'targeta', path: '/targeta' },
    {
        label: 'Darrers moviments',
        id: 'darrers-movimients',
        path: '/darrers-movimients',
    },
    { label: 'Moneder', id: 'moneder', path: '/moneder' },
    { label: 'Mou-te Bé', id: 'mou-te-be', path: '/mou-te-be' },
];

storiesOf('Organism|Header', module).add('default', () => (
    <ThemeProvider {...{ theme }}>
        <Header
            userName="Lucio Fondón"
            {...{ languages }}
            {...{ menu }}
            {...actions}
            notifications={18}
        />
    </ThemeProvider>
));

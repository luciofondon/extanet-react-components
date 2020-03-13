import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from '@material-ui/core';
import DropDownMenu from '../drop-down-menu.component';
import theme from '../../../styles/global-styles';

const options = [
    { label: 'Opción 1', id: 'opcion1' },
    { label: 'Opción 2', id: 'opcion2' },
    { label: 'Opción 3', id: 'opcion3' },
];

const actions = {
    handleClick: action('handleClick'),
};

storiesOf('Atoms|DropDownMenu', module).add('default', () => (
    <ThemeProvider {...{ theme }}>
        <DropDownMenu label="Menu" {...{ options }} {...actions} />
    </ThemeProvider>
));

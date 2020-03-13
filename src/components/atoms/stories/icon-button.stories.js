import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from '@material-ui/core';
import IconButton from '../icon-button.component';
import theme from '../../../styles/global-styles';

const actions = {
    handleClick: action('handleClick'),
};

storiesOf('Atoms|IconButton', module).add('default', () => (
    <ThemeProvider {...{ theme }}>
        <IconButton {...actions} />
    </ThemeProvider>
));

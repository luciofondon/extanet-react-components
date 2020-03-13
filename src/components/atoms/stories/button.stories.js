import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from '@material-ui/core';
import Button from '../button.component';
import theme from '../../../styles/global-styles';

const actions = {
    handleClick: action('handleClick'),
};

storiesOf('Atoms|Button', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <ThemeProvider {...{ theme }}>
            <Button
                label="Botón"
                {...actions}
                disabled={boolean('Disabled', false)}
            />
        </ThemeProvider>
    ))
    .add('Botón 2', () => (
        <ThemeProvider {...{ theme }}>
            <Button
                label="Botón 2"
                {...actions}
                disabled={boolean('Disabled', false)}
            />
        </ThemeProvider>
    ));

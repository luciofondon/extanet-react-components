import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core';
import MenuItem from '../menu-item.component';
import theme from '../../../styles/global-styles';

storiesOf('Atoms|MenuItem', module)
    .add('default', () => (
        <ThemeProvider {...{ theme }}>
            <MenuItem path="/opcion">Opción</MenuItem>
        </ThemeProvider>
    ));

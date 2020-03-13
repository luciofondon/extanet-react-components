import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/core';
import Chip from '../chip.component';
import theme from '../../../styles/global-styles';

storiesOf('Atoms|Chip', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <ThemeProvider {...{ theme }}>
            <Chip>Informacion</Chip>
        </ThemeProvider>
    ));

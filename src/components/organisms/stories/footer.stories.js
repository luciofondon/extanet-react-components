import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core';
import Footer from '../footer.component';
import theme from '../../../styles/global-styles';

storiesOf('Organism|Footer', module).add('default', () => (
    <ThemeProvider {...{ theme }}>
        <Footer version="1.1.1" />
    </ThemeProvider>
));

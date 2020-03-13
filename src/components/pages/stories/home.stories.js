import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from '@material-ui/core';
import HomePage from '../home.component';
import theme from '../../../styles/global-styles';
import { languages, menu } from '../../organisms/stories/header.stories';
import {
    favoriteLines,
    favoriteStops,
} from '../../templates/stories/home.stories';

const actions = {
    handleClickLogout: action('handleClickLogout'),
    handleClickOpenHelp: action('handleClickOpenHelp'),
};

storiesOf('Pages|Home', module).add('default', () => (
    <ThemeProvider {...{ theme }}>
        <HomePage
            {...actions}
            userName="Lucio Fondón"
            version="1.2.3"
            {...{ languages }}
            {...{ menu }}
            {...{ favoriteLines }}
            {...{ favoriteStops }}
        />
    </ThemeProvider>
));

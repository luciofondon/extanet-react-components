import { configure, addParameters, addDecorator } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '@storybook/addon-console';
import themeCtm from './ctm-theme';
import StoryRouter from 'storybook-react-router';

addDecorator(StoryRouter());

addParameters({
  options: {
    theme: themeCtm,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
});

configure([
  require.context('../src/components/atoms/stories', true, /\.stories\.js$/),
  require.context('../src/components/molecules/stories', true, /\.stories\.js$/),
  require.context('../src/components/organisms/stories', true, /\.stories\.js$/),
  require.context('../src/components/templates/stories', true, /\.stories\.js$/),
  require.context('../src/components/pages/stories', true, /\.stories\.js$/)
], module);

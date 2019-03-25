import { addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';

addParameters({
  backgrounds: [
    { name: 'default', value: '#EEF2F5', default: true },
    { name: 'white', value: 'white' }
  ],
  options: {
    theme: create({
      // Typography
      fontBase: 'Roboto, sans-serif'
    })
  }
})

function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)

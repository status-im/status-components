import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import withBackgrounds from "@storybook/addon-backgrounds"

addDecorator(
  withOptions({
    theme: {
      mainBackground: '#112 linear-gradient(to right, #112, #333)',
      mainBorder: '1px solid rgba(255,255,255,0.1)',
      mainBorderColor: 'rgba(255,255,255,0.1)',
      mainBorderRadius: 4,
      mainFill: 'rgba(255,255,255,0.1)',
      barFill: 'rgba(0,0,0,1)',
      barSelectedColor: 'rgba(255,255,255,0.4)',
      inputFill: 'rgba(0,0,0,1)',
      mainTextFace: 'Inter-UI, sans-serif',
      mainTextColor: '#efefef',
      dimmedTextColor: 'rgba(255,255,255,0.4)',
      highlightColor: '#9fdaff',
      successColor: '#0edf62',
      failColor: '#ff3f3f',
      warnColor: 'orange',
      mainTextSize: 13,
      monoTextFace: 'roboto-mono',
      layoutMargin: 10,
      overlayBackground:
        'linear-gradient(to bottom right, rgba(17, 17, 34, 0.6), rgba(51, 51, 51, 0.8))',
    }
  })
)

addDecorator(
  withBackgrounds([
    { name: 'default', value: '#eef2f5', default: true },
    { name: 'white', value: 'white' }
  ])
)

function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)

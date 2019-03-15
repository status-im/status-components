import React from 'react'
import 'typeface-roboto'

import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '@storybook/react/demo'
// import MobileButton from '../components/MobileButton'

storiesOf('Welcome', module)
  .add('To Status-Storybook', () => <StatusWelcome />)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)


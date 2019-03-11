import React from 'react'
import 'typeface-roboto'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number, object, select } from '@storybook/addon-knobs/react'

import { Welcome } from '@storybook/react/demo'
import MobileButton from '../components/MobileButton'

storiesOf('Welcome', module)
  .add('To Status-Storybook', () => <StatusWelcome />)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)


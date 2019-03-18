import React from 'react'
import 'typeface-roboto'

import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'

import StatusWelcome from '../components/Welcome'
import { Button } from '../components/Button'
// import MobileButton from '../components/MobileButton'


storiesOf('Welcome', module)
  .add('To Status-Welcome', () => <StatusWelcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('To Status-Button', () => <Button title="Click Me" />)
  .add('Red Button', () => <Button title="Click Me" color="red" />)
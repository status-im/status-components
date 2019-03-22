import React from 'react'
import 'typeface-roboto'

import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'

import { Text, TouchableHighlight, View } from 'react-native';
import { Button } from '../components/Button'

storiesOf('Button', module)
  .add('Main button', () =>
    <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
      <Button main={true} title="Click Me" />
      <Button main={true} disabled={true} title="Click Me" />
    </View>)
  .add('Secondary button', () =>
    <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
      <Button title="Click Me" />
      <Button disabled={true} title="Click Me" />
    </View>);
import React from 'react'
import { storiesOf } from '@storybook/react'
import { View } from 'react-native'

// Font
import 'typeface-roboto'

// Components
import Button from '../components/Button'
import TextInputComponent from '../components/TextInputComponent'
import SearchInput from '../components/SearchInput'

// Style Guide
import ColorPalette from '../components/styleguide/ColorPalette'
import Icons from '../components/styleguide/Icons'
import Typography from '../components/styleguide/Typography'

storiesOf('Button', module)
  .add('Main button', () => (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
      <Button main={true} title="Click Me" />
      <Button main={true} disabled={true} title="Click Me" />
    </View>
  ))
  .add('Secondary button', () => (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
      <Button title="Click Me" />
      <Button disabled={true} title="Click Me" />
    </View>
  ))

storiesOf('Theming', module)
  .add('Color Palette', () => <ColorPalette />)
  .add('Icons', () => <Icons />)
  .add('Typography', () => <Typography />)

storiesOf('TextInput', module)
  .add('Text Input', () => (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
      <TextInputComponent placeholder={'Placeholder'} />
      <TextInputComponent text={'Content'} />
      <TextInputComponent
        label="Input label"
        text={'Lorem ipsum dolor sit amet, consectetur do'}
      />
      <TextInputComponent label="Input label" text={'Content'} error={true} />
    </View>
  ))
  .add('Text Area', () => (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
      <TextInputComponent placeholder={'Placeholder'} 
        multiLine={true}
        maxNumOfLines={3}/>
      <TextInputComponent label="Textarea label" text={'Lorem ipsum dolor sit amet, consectetur ' +
          'adipiscing elit, sed do eiusmod tempor ' + 
          'incididunt ut labore et dolore magna aliqua'} 
          multiLine={true}
          maxNumOfLines={3}/>
      <TextInputComponent
        label="Textarea label"
        multiLine={true}
        maxNumOfLines={8}
      />
    </View>
  ))
  .add('Search Input', () => (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
      <SearchInput placeholder={'Search placeholder...'} autoFocus={true} />
      <SearchInput placeholder={'Search placeholder...'} />
    </View>
  ))

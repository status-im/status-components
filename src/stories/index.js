import React from 'react'
import { storiesOf } from '@storybook/react'
import { View } from 'react-native'

// Font
import 'typeface-roboto'

// Components
import Button from '../components/Button'
import TextInput from '../components/TextInput'
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
      <TextInput placeholder={'Placeholder'} />
      <TextInput text={'Content'} />
      <TextInput
        label="Input label"
        text={'Lorem ipsum dolor sit amet, consectetur do'}
      />
    </View>
  ))
  .add('Text Area', () => (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
      <TextInput placeholder={'Placeholder'} 
        multiLine={true}
        autoFocus={false}/>
      <TextInput
        label="Textarea label"
        multiLine={true}
        autoFocus={false}
      />
    </View>
  ))
  .add('Search Input', () => (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
      <SearchInput placeholder={'Search placeholder...'} autoFocus={true} />
      <SearchInput placeholder={'Search placeholder...'} />
    </View>
  ))

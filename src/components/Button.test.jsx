import React from 'react'
import { Button as Btn } from 'react-native'

import ReactDOM from 'react-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Btn title="dai cazzo" onPress={() => {}} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

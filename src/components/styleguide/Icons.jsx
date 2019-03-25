import React from 'react'
import styled from '@emotion/styled'

// HOC
import withGlobalStyles from '../withGlobalStyles'

// Icons List
import icons from '../../icons.json'

const mainIconsList = icons.main.sort()
const stickersIconsList = icons.stickers.sort()
const tinyIconsList = icons.tiny.sort()

const List = styled.div({
  display: 'flex',
  flexFlow: 'row wrap',
})

const Item = styled.div({
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  flex: '0 1 20%',
  minWidth: 120,

  padding: '0px 7.5px 20px',

  '& svg': {
    marginRight: 10,
    width: 24,
    height: 24,
  },
})

const Meta = styled.div({
  color: '#333',
  fontSize: 12,
  marginLeft: '5px',
})

class Icons extends React.Component {
  render() {
    return (
      <>
        <h3>Main</h3>
        <List>
          {mainIconsList.map(key => (
            <Item key={key}>
              <img src={`/icons/main/${key}.svg`} />
              <Meta>{key}</Meta>
            </Item>
          ))}
        </List>

        <h3>Tiny</h3>
        <List>
          {tinyIconsList.map(key => (
            <Item key={key}>
              <img src={`/icons/tiny/${key}.svg`} />
              <Meta>{key}</Meta>
            </Item>
          ))}
        </List>

        <h3>Stickers</h3>
        <List>
          {stickersIconsList.map(key => (
            <Item key={key}>
              <img src={`/icons/stickers/${key}.svg`} />
              <Meta>{key}</Meta>
            </Item>
          ))}
        </List>
      </>
    )
  }
}

export default withGlobalStyles(Icons)

import React from 'react'

// HOC
import withGlobalStyles from '../../withGlobalStyles'

// Components
import Swatch from './Swatch'

// Theme
import theme from '../../../theme'

class ColorPalette extends React.Component {
  render() {
    return (
      <>
        <h2>Main</h2>

        <Swatch color={theme.colors.main.accentBlue} />
        <Swatch color={theme.colors.main.lightBlue} />
        <Swatch color={theme.colors.main.white} />

        <Swatch color={theme.colors.main.darkGrey} />
        <Swatch color={theme.colors.main.lightGrey} />
        <Swatch color={theme.colors.main.black} />

        <Swatch color={theme.colors.main.red} />
        <Swatch color={theme.colors.main.green} />

        <h2>Shades</h2>

        <Swatch color={theme.colors.shades.darkGrey40} />
        <Swatch color={theme.colors.shades.black10} />

        <Swatch color={theme.colors.shades.white70} />
        <Swatch color={theme.colors.shades.white40} />
        <Swatch color={theme.colors.shades.white10} />
      </>
    )
  }
}

export default withGlobalStyles(ColorPalette)

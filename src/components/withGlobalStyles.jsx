import React from 'react'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

// Theme
import theme from '../theme'

const withGlobalStyles = Component => {
  class WithGlobalStyles extends React.Component {
    render() {
      return (
        <React.Fragment>
          <Global
            styles={css`
              * {
                font-family: Inter !important;
              }
            `}
          />
          <ThemeProvider theme={theme}>
            <div style={{ padding: '16px' }}>
              <Component {...this.props} />
            </div>
          </ThemeProvider>
        </React.Fragment>
      )
    }
  }

  return WithGlobalStyles
}

export default withGlobalStyles

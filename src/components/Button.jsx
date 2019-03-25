import React from 'react'
import PropTypes from 'prop-types'
import {
  ViewPropTypes,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native'

// Theme
import theme from '../theme'

const { colors } = theme

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: colors.main.white.rgb,
    borderRadius: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableMain: {
    backgroundColor: colors.main.accentBlue.rgb,
  },
  touchableDisabled: {
    backgroundColor: colors.main.lightGrey.rgb,
  },
  text: {
    marginHorizontal: 32,
    marginVertical: 11,
    color: colors.main.accentBlue.rgb,
    textAlign: 'center',
    fontSize: 15,
  },
  textMain: {
    color: colors.main.white.rgb,
  },
  textDisabled: {
    color: colors.main.darkGrey.rgb,
  },
})

class Button extends React.Component {
  render() {
    const { main, title, disabled, onPress, accessibilityLabel } = this.props

    return (
      <TouchableHighlight
        style={[
          styles.touchable,
          main && styles.touchableMain,
          disabled && styles.touchableDisabled,
        ]}
        disabled={disabled}
        onPress={onPress}
        accessibilityLabel={accessibilityLabel}
      >
        <Text style={[styles.text, main && styles.textMain, disabled && styles.textDisabled]}>
          {title}
        </Text>
      </TouchableHighlight>
    )
  }
}

Button.propTypes = {
  accessibilityLabel: PropTypes.func,
  disabled: PropTypes.bool,
  main: PropTypes.bool,
  onPress: PropTypes.func,
  title: PropTypes.string,
}

export default Button

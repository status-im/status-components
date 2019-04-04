import React from 'react'
import PropTypes from 'prop-types'
import {
  ViewPropTypes,
  StyleSheet,
  Text,
  TouchableHighlight,
  Animated,
  View,
} from 'react-native'

// Theme
import theme from '../theme'
import { rgba } from 'polished'

const { colors } = theme

const styles = StyleSheet.create({
  tooltipBody: {
    position: 'absolute',
    backgroundColor: colors.main.white.rgb,
    borderRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    shadowColor: rgba(0, 34, 51, 0.08),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tooltipTip: {
    position: 'absolute',
    bottom: -40,
    left: 26 - 18 / 2 + 0.5,
    width: 18,
    height: 7.79,
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderTopWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderColor: 'white',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    shadowColor: rgba(0, 34, 51, 0.08),
  },
  text: {
    marginHorizontal: 16,
    marginVertical: 6,
    color: colors.main.white.rgb,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: theme.fontSizes.s,
    lineHeight: theme.lineHeights.normal,
  },
  textMain: {
    color: colors.main.black.rgb,
  },
  textError: {
    color: colors.main.red.rgb,
  },
})

class Tooltip extends React.Component {
  render() {
    const { main, title, error, accessibilityLabel } = this.props

    return (
      <View>
        {/* Start: Tooltip */}
        <View style={styles.tooltipBody}>
          <Text
            style={[
              styles.text,
              main && styles.textMain,
              error && styles.textError,
            ]}
          >
            {title}
          </Text>
        </View>
        <View style={styles.tooltipTip} />
      </View>
    )
  }
}

Tooltip.propTypes = {
  accessibilityLabel: PropTypes.func,
  error: PropTypes.bool,
  main: PropTypes.bool,
  title: PropTypes.string,
}

export default Tooltip

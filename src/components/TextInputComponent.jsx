import React from 'react'
import PropTypes from 'prop-types'
import {
  ViewPropTypes,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'

// Theme
import theme from '../theme'

const { colors } = theme

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontFamily: 'Inter UI',
  },
  inputContainer: {
    padding: 16,
    justifyContent: 'center',
    backgroundColor: colors.main.white.rgb,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  input: {
    padding: 0,
    backgroundColor: colors.main.lightGrey.rgb,
    minHeight: 52,
    width: 343,
  },
  // error: {
  //   color: colors.main.red.rgb,
  // },
  text: {
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 15,
    fontFamily: 'Inter UI',
    lineHeight: 22,
  },
})

class TextInputComponent extends React.Component {

  render() {
    const { label, error, text, maxNumOfLines, multiLine, autoFocus } = this.props
    
    return (
      <View>
        <View style={[styles.inputContainer]}>
          <Text style={[styles.label, error && styles.error]}>
            {label}
          </Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => console.log('Pressed')}
          >
            <TextInput
              {...this.props}
              placeholderTextColor={'gray'}
              multiline={multiLine}
              numberOfLines={maxNumOfLines}
              style={[styles.input, styles.text]}
              autoFocus={autoFocus}
              autoCapitalize={'none'}
              value={text}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

TextInputComponent.propTypes = {
  label: PropTypes.string,
  error: PropTypes.bool,
  text: PropTypes.string,
  maxNumOfLines: PropTypes.number,
  multiLIne: PropTypes.bool,
  autoFocus: PropTypes.bool,
}

TextInputComponent.defaultTypes = {
  maxNumOfLines: 1,
  multiLine: false,
  autoFocus: true,
}

export default TextInputComponent

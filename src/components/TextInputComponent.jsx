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
    backgroundColor: colors.main.white.rgb,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  inputContainer: {
    justifyContent: 'center',
    backgroundColor: colors.main.white.rgb,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  input: {
    marginBottom: 16,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 8,
    width: 343,
    backgroundColor: colors.main.lightGrey.rgb,
  },
  error: {
    color: colors.main.red.rgb,
  },
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
    const { label, error, text, maxNumOfLines, multiLine,} = this.props

    return (
      <View>
        <View style={[styles.inputContainer]}>
          <Text style={[styles.label, styles.text, error && styles.error]}>
            {label}
          </Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => console.log('Pressed')}
          >
            <TextInput
              style={[styles.input, styles.text]}
              {...this.props}
              placeholderTextColor={'gray'}
              multiline={multiLine}
              numberOfLines={maxNumOfLines}
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
}

TextInputComponent.defaultTypes = {
  maxNumOfLines: 1,
  multiLine: false,
}

export default TextInputComponent

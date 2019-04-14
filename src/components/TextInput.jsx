import React from 'react'
import PropTypes from 'prop-types'
import {
  ViewPropTypes,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import { TextInput as TextInputComponent } from 'react-native'

// Theme
import theme from '../theme'

const { colors } = theme

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontFamily: 'Inter UI',
    paddingBottom: 8,
  },
  inputContainer: {
    paddingTop: 8,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: colors.main.white.rgb,
    marginVertical: 16,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  input: {
    padding: 0,
    backgroundColor: colors.main.lightGrey.rgb,
    minHeight: 52,
    overflowY: 'auto',
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

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0
    };
  }

  render() {
    const { label, error, text, multiLine, autoFocus } = this.props
    
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
            <TextInputComponent
              {...this.props}
              onContentSizeChange={(event) => {
                if(this.state.height <= 160) {
                  this.setState({height: event.nativeEvent.contentSize.height})
                }
              }}
              placeholderTextColor={'gray'}
              multiline={multiLine}
              style={[styles.input, styles.text, {minHeight: Math.max(52, this.state.height)}]}
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

TextInput.propTypes = {
  label: PropTypes.string,
  error: PropTypes.bool,
  text: PropTypes.string,
  maxNumOfLines: PropTypes.number,
  multiLine: PropTypes.bool,
  autoFocus: PropTypes.bool,
}

TextInput.defaultTypes = {
  multiLine: false,
  autoFocus: true,
}

export default TextInput

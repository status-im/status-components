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
    position: 'relative',
    alignItems: 'center',
    display: 'flex',
    fontFamily: 'Inter UI',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: 'normal',
    width: 343,
    top: 12,
    height: 26,
    
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputTouch: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: colors.main.white.rgb,
  },
  input: {
    position: 'relative',
    backgroundColor: colors.main.lightGrey.rgb,
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 16,
    minHeight: 52,
    overflowY: 'auto',
    width: 343,
    height: 52,
  },
  // error: {
  //   color: colors.main.red.rgb,
  // },
  text: {
    fontFamily: 'Inter UI',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 22,
    padding: 16,
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
    const { container, autoFocus, error, labeltext, labelishidden, text, textarea } = this.props
    
    function renderLabel() {
      if(labelishidden == true) {
        return null;
      } else {
        return <Text style={[styles.label, error && styles.error]}>{labeltext}</Text>
      }
    }
    if(textarea == true) {
      return (
        <View style={[container && styles.inputContainer]}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.inputTouch]}>  
            <View>{renderLabel()}</View>
            <TextInputComponent
              {...this.props}
              onContentSizeChange={(event) => {
                if(this.state.height <= 202) {
                  this.setState({height: event.nativeEvent.contentSize.height})
                }
              }}
              autoCapitalize={'none'}
              autoFocus={autoFocus}
              multiline={true}
              placeholderTextColor={'gray'}
              style={[styles.input, styles.text, {minHeight: Math.max(95, this.state.height)}]}
              value={text}
            />
            </TouchableOpacity>
          </View>
      
      )
    } else {
      return (
        <View style={[container && styles.inputContainer]}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.inputTouch]}>  
            <View>{renderLabel()}</View>
            <TextInputComponent
              {...this.props}
              autoCapitalize={'none'}
              autoFocus={autoFocus}
              multiline={false}
              placeholderTextColor={'gray'}
              style={[styles.input, styles.text, {minHeight: 32}]}
              value={text}
            />
            </TouchableOpacity>
          </View>
      
      )
    }
  }
}

TextInput.propTypes = {
  autoFocus: PropTypes.bool,
  error: PropTypes.bool,
  labeltext: PropTypes.string,
  labelishidden: PropTypes.bool,
  maxNumOfLines: PropTypes.number,
  text: PropTypes.string,
}

TextInput.defaultTypes = {
  autoFocus: false,
  labelishidden: false,
}

export default TextInput

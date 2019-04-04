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
    color: colors.main.black.rgb,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
  },

  textAreaContainer: {
    backgroundColor: colors.main.white.rgb,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 8,
  },
  textArea: {
    backgroundColor: colors.main.lightGrey.rgb,
    borderRadius: 8,
    width: 343,
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
  },
  text: {
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 15,
    fontFamily: 'Inter UI',
    lineHeight: 22,
  },
})

class TextArea extends React.Component {
  render() {
    const { label, text, maxNumOfLines} = this.props
    return (
      <View>
        <View style={[styles.textAreaContainer, styles.textAreaContainer]}>
          <Text style={[styles.label, styles.text]}>{label}</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => console.log('Pressed')}>

            <TextInput
              {...this.props}
              style={[styles.textArea, styles.text]}
              autoCapitalize={'none'}
              multiline={true}
              numberOfLines={maxNumOfLines}
              placeholderTextColor={'gray'}
              value={text}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

TextArea.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
  maxNumOfLines: PropTypes.number,
}

TextArea.defaultProps = {
  maxNumOfLines: 3,
}

export default TextArea

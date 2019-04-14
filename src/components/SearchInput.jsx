import React from 'react'
import PropTypes from 'prop-types'
import {
  ViewPropTypes,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import TextInput from './TextInput'

// Theme
import theme from '../theme'

const { colors } = theme

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: 8,
    marginVertical: 16,
    marginHorizontal: 16,
    height: 36,
  },
  search: {
    flex: 1,
    paddingLeft: 8,
    backgroundColor: colors.main.lightGrey.rgb,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: '140%',
    marginVertical: 10,
  },
})

class SearchInput extends TextInput {
  render() {
    const { text } = this.props

    return (
      <View>
        <View style={[styles.searchContainer]}>
          <img src="/icons/main/search.svg" />
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => console.log('Pressed')}
          >
            <TextInput
              style={[styles.search]}
              {...this.props}
              placeholderTextColor={'gray'}
              autoCapitalize={'none'}
              value={text}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

SearchInput.propTypes = {
  text: PropTypes.string,
}

export default SearchInput

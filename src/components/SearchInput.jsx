import React from 'react'
import PropTypes from 'prop-types'
import {
  ViewPropTypes,
  StyleSheet,
  Animated,
  View,
  TouchableOpacity,
  Easing,
} from 'react-native'

import TextInput from "./TextInput";

// Theme
import theme from '../theme'

const { colors } = theme

const SEARCH_SHRINK_WIDTH = 375 - 65;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  searchInputContainer: {
    backgroundColor: colors.main.lightGrey.rgb,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  search: {
    backgroundColor: colors.main.lightGrey.rgb,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  searchIcon: {
    marginRight: 4,
    height: 24,
    width: 24,
  },
  cancelSearch: {
    flex: 1,
    position: "absolute",
    marginHorizontal: 16,
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  cancelSearchText: {
    flex: 1,
    backgroundColor: colors.main.white.rgb,
    color: colors.main.accentBlue.rgb,
    marginLeft: 16,
    fontFamily: "Inter",
    fontSize: 15,
    lineHeight: '140%',
    textAlign: "center",
  },
  closeIcon: {
    height: 16,
    width: 16,
    marginRight: 30
  },
})

class SearchInput extends TextInput {
  constructor(props) {
    super(props);
    
    this.state = {
      inputLength: new Animated.Value(410),
      cancelPosition: new Animated.Value(0),
      opacity: new Animated.Value(0),
      searchBarFocused: false,
    };
  }

  onFocus = () => {
    Animated.parallel([
      Animated.timing(this.state.inputLength, {
        toValue: SEARCH_SHRINK_WIDTH,
        duration: 350,
        easing: Easing.quad,
      }),
      Animated.timing(this.state.cancelPosition, {
        toValue: 16,
        duration: 350
      }),
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 350
      })
    ]).start();
  }

  onBlur = () => {
    Animated.parallel([
      Animated.timing(this.state.inputLength, {
        toValue: 410,
        duration: 350,
        easing: Easing.quad
      }),
      Animated.timing(this.state.cancelPosition, {
        toValue: 0,
        duration: 350
      }),
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: 350
      })
    ]).start();
    
  };

  render() {
    const { text, } = this.props

    return (
      <View style={[styles.searchContainer, ]}> 
      <Animated.Image source={require('../../public/icons/main/search.svg')}style={[styles.searchIcon]}/>
        <View styles={[styles.searchInputContainer]}>
          <Animated.View style={[{width: this.state.inputLength,}]}>
            <TextInput
              style={[styles.search]}
              {...this.props}
              placeholderTextColor={'gray'}
              autoCapitalize={'none'}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              value={text}
              labelishidden={true}
            />
          </Animated.View>
        
        </View>
        
        <View style={[styles.closeIcon,{width: 16, height: 16}]}>

        <Animated.Image source={require('../../public/icons/main/close.svg')}style={[styles.closeIcon, {opacity: this.state.opacity}]}/>
        </View>
        <TouchableOpacity styles={[styles.cancelSearch, { marginLeft: 16, right: this.state.cancelPosition}]}>
          <Animated.Text style={[styles.cancelSearchText, {opacity: this.state.opacity}]}>
            Cancel
          </Animated.Text>
        </TouchableOpacity>
      </View>
    )
  }
}

SearchInput.propTypes = {
  text: PropTypes.string
}

export default SearchInput

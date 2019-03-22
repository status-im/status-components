import * as React from 'react';
import { ViewPropTypes, StyleSheet, Text, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  touchable: {
    flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center"
  },
  touchableMain: {
    backgroundColor: '#4360DF1a', borderRadius: 8
  },
  touchableDisabled: {
    backgroundColor:"#939BA11A"
  },
  text: {
    marginHorizontal: 32, marginVertical: 11, color: "#4360DF", textAlign: "center", fontSize: 15
  },
  textDisabled: {
    color:"#939BA1"
  }
});

export class Button extends React.Component {

  static propTypes = {
    style: ViewPropTypes.style
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { main, title, disabled, onPress, accessibilityLabel} = this.props;
    return (
      <TouchableHighlight
        style={[styles.touchable, main && styles.touchableMain, main && disabled && styles.touchableDisabled]}
        disabled={disabled}
        onPress={onPress}
        accessibilityLabel={accessibilityLabel}>
        <Text style={[styles.text, disabled && styles.textDisabled]}>{title}</Text>
      </TouchableHighlight>
    );
  }
}
import * as React from 'react';
import { Button as Btn } from 'react-native';

export class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  toggle = () => {
    console.log('touched')
  };

  render() {
    const { title, color } = this.props;
    return (
      <Btn
        onPress={this.toggle}
        title={title}
        color={ color || "#841584"}
        accessibilityLabel="Learn more about this purple button"
      />
    );
  }
}
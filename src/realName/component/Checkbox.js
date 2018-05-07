/**
 * react-native-check-box
 * Checkbox component for react native, it works on iOS and Android
 * https://github.com/crazycodeboy/react-native-check-box
 * Email:crazycodeboy@gmail.com
 * Blog:http://jiapenghui.com
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  // TouchableHighlight
  TouchableOpacity,
} from 'react-native';

export default class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: this.props.isChecked,
    };
  }

  static propTypes = {
    ...View.propTypes,
    leftText: React.PropTypes.string,
    leftTextView: React.PropTypes.element,
    rightText: React.PropTypes.string,
    leftTextStyle: Text.propTypes.style,
    rightTextView: React.PropTypes.element,
    rightTextStyle: Text.propTypes.style,
    checkedImage: React.PropTypes.element,
    unCheckedImage: React.PropTypes.element,
    onClick: React.PropTypes.func.isRequired,
    isChecked: React.PropTypes.bool,
  };
  static defaultProps = {
    isChecked: false,
    leftTextStyle: {},
    rightTextStyle: {},
  };

  _renderLeft() {
    if (this.props.leftTextView) return this.props.leftTextView;
    if (!this.props.leftText) return null;
    return (
      <Text style={[styles.leftText, this.props.leftTextStyle]}>
        {this.props.leftText}
      </Text>
    );
  }
  _renderRight() {
    // if (this.props.rightTextView)return this.props.rightTextView;
    // if (!this.props.rightText)return null;
    return (
      <Text style={[styles.rightText, this.props.rightTextStyle]}>
        {this.props.rightText}
      </Text>
    );
  }

  _renderImage() {
    if (this.state.isChecked) {
      return this.props.checkedImage
        ? this.props.checkedImage
        : this.genCheckedImage();
    } else {
      return this.props.unCheckedImage
        ? this.props.unCheckedImage
        : this.genCheckedImage();
    }
  }

  genCheckedImage() {
    var source = this.state.isChecked
      ? require('../images/ic_check_box.png')
      : require('../images/ic_check_box_outline_blank.png');

    return <Image source={source} />;
  }

  onClick() {
    this.setState({
      isChecked: !this.state.isChecked,
    });
    console.log(this.state.isChecked);
    this.props.onClick(this.state.isChecked);
  }

  render() {
    return (
      <TouchableOpacity
        style={{ flex: 1, padding: 3 }}
        onPress={() => this.onClick()}
        underlayColor="transparent"
      >
        <View style={styles.container}>
          {this._renderLeft()}
          {this._renderImage()}
          {this._renderRight()}
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftText: {
    flex: 1,
  },
  rightText: {
    flex: 1,
    marginLeft: 10,
  },
});

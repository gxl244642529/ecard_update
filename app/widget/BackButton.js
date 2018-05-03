import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {BackIcon} from './Icons'
export default class BackButton extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <TouchableOpacity style={{padding:15,}} onPress={this.props.onPress}>
        <BackIcon/>
      </TouchableOpacity>
    );
  }
}

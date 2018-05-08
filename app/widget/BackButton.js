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
      <TouchableOpacity style={styles.backbutton} onPress={this.props.onPress}>
        <BackIcon/>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  backbutton:{
     height:45,width:40,justifyContent:'center',alignItems:'center',
  }
})

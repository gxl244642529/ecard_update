/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View ,
  ScrollView
} from 'react-native';
import LargeTitle from '../../widget/LargeTitle'

export default class Recommend extends Component<Props> {
  constructor(props){
    super(props)
  }
  render() {
    return (
     <ScrollView style={{flex:1,backgroundColor:'#f8f9fa'}}>
        <View style={{backgroundColor:"red",margin:15,height:150,borderRadius:5}}></View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

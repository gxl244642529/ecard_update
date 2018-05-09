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
  View,
  ScrollView,
  TouchableOpacity,
  Image
 } from 'react-native';


export default class AddServer extends Component<Props> {
  render() {
    return (
      <ScrollView style={{flex:1,backgroundColor:'#f8f9fa'}}>
        <TouchableOpacity style={{flex:1,flexDirection:'row',backgroundColor:'#fff',margin:15,borderRadius:5,padding:10}}>
          <View style={{flex:0.8,justifyContent:'center'}}>
            <Text style={{color:"#262626",fontSize:16}}>平安</Text>
          </View>
          <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
              <Image source={require('./images/ser.png')} style={{width:40,height:40}} resizeMode="contain"/>
          </View>
        </TouchableOpacity>

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

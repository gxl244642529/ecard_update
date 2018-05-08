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
  ScrollView,
  Image
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
        <View style={{paddingTop:10,paddingLeft:15}}>
          <Text style={{fontSize:10,color:'#808080'}}>精选理财</Text>
          <ScrollView horizontal={true}>
            <Image style={{width:170,height:107}} source={require('./images/select.png')} resizeMode="contain"/>
            <Image style={{width:170,height:107}} source={require('./images/select.png')} resizeMode="contain"/>
          </ScrollView>
        </View>
        <View style={{paddingTop:10,paddingLeft:15}}>
          <View>
            <Text style={{fontSize:10,color:'#808080'}}>浙金理财</Text>
            <Image style={{height:90,width:345}} resizeMode="stretch" source={require('./images/pro.png')}/>
          </View>
        </View>
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

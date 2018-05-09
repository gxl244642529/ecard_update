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


export default class Introduce extends Component<Props> {
  _rendeItem(data,index){
    return(
      <TouchableOpacity style={{flex:1,flexDirection:'row',justifyContent:'space-between',margin:15,borderRadius:5,backgroundColor:'#fff',padding:10}}>
        <View style={{flex:0.7,justifyContent:'center'}}>
          <Text style={{color:"#262626",fontSize:16}}>{data.mainTitle}</Text>
          <Text style={{color:"#808080",fontSize:12}}>{data.intro}</Text>
        </View>
        <View style={{flex:0.3,justifyContent:'center',alignItems:'center'}}>
            <Image source={data.img} style={{width:69,height:50}} resizeMode="contain"/>
        </View>

      </TouchableOpacity>
    )
  }
  render() {
    return (
      <ScrollView style={{flex:1,backgroundColor:'#f8f9fa'}}>
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',margin:15,borderRadius:5,backgroundColor:'#fff',padding:10 }}>
          <View style={{flex:0.7,justifyContent:'center'}}>
            <Text style={{color:"#262626",fontSize:16}}>上班珠海华发</Text>
            <Text style={{color:"#808080",fontSize:12}}>上班珠海华发客流量卡</Text>
          </View>
          <View style={{flex:0.3,justifyContent:'center',alignItems:'center'}}>
              <Image source={require('./images/intro.png')} style={{width:69,height:50}} resizeMode="contain"/>
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

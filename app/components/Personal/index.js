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
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import PersonalStyle from './index.style.js'
import LargeTitle from '../../widget/LargeTitle';
const NEXT_ICON = require('./images/next.png');
import container from '../GlobalStyle'
export default class Personal extends Component<Props> {
  constructor(props){
    super(props);
    let item=[
      {title:'账单'},
      {title:'银行卡'},
      {title:'我的订单'},
      {title:'我的e通卡'}
    ]
    this.state={
      itemdata:item
    }
  }
  _rendeItem=(data,index)=>{
    return(
      <TouchableOpacity key={index} style={{marginLeft:15,marginRight:15,marginTop:10,padding:15,flexDirection:'row',justifyContent:'space-between',backgroundColor:'#fff',borderRadius:5}}>
        <Text style={{color:'#262626',fontSize:16}}>{data.title}</Text>
        <Image source={require('./images/next.png')} style={{width:24,height:24}} resizeMode="contain"/>
      </TouchableOpacity>
    )
  }
  _renderHeader=()=>{
    return(
        <View style={{flexDirection:'row',backgroundColor:'#fff',paddingBottom:10}}>
          <View style={{marginLeft:15,marginRight:15,flex:1,flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{flex:0.8}}>
                <Text style={{fontSize:28,color:'#262626'}}>个人中心</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Text style={{fontSize:16,color:'#262626'}}>184*****681</Text>
                  <Image source={require('./images/noreal.png')} style={{width:50,height:16,marginLeft:5}} resizeMode="stretch"/>
                </View>
            </View>
            <View style={{flex:0.2,alignItems:'center'}}>
                <Image source={require('../Home/images/head.png')} style={{height:50,width:50,borderRadius:7}} resizeMode="stretch"/>
            </View>
          </View>
      </View>
    );
  }

  render() {
    return (
      <View style={container}>

          {this._renderHeader()}
          <View style={{marginLeft:15,marginRight:15,marginTop:15,flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity><Image source={require('./images/integral.png')} style={{width:170,height:80}} resizeMode="stretch"/></TouchableOpacity>
            <TouchableOpacity><Image source={require('./images/integral.png')} style={{width:170,height:80}} resizeMode="stretch"/></TouchableOpacity>
          </View>

          <ScrollView>
            {this.state.itemdata&&this.state.itemdata.map(this._rendeItem)}
          </ScrollView>
          <View style={{bottom:0,flexDirection:'row',justifyContent:'flex-end'}}>
            <TouchableOpacity style={{backgroundColor:'#fff',padding:5,borderRadius:25,justifyContent:'center',alignItems:'center'}}>
              <Image style={{width:60,height:50}} source={require('./images/setting.png')} resizeMode="contain"/>
            </TouchableOpacity>
          </View>
      </View>
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

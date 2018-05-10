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
import GlobalStyle from '../GlobalStyle'
import LargeTitle from '../../widget/LargeTitle';
const NEXT_ICON = require('./images/next.png');
export default class Personal extends Component<Props> {
  // static navigationOptions=({navigation})=>{
  //   headerTitle:navigation.state.params.headerTitle
  // }

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
      <TouchableOpacity key={index} style={PersonalStyle.item}>
        <Text style={PersonalStyle.itemtext}>{data.title}</Text>
        <Image source={require('./images/next.png')} style={PersonalStyle.nextIcon} resizeMode="contain"/>
      </TouchableOpacity>
    )
  }
  _renderHeader=()=>{
    return(
        <View style={PersonalStyle.headerView}>
          <View style={PersonalStyle.headerViewflex}>
            <View style={PersonalStyle.flex8}>
                <Text style={GlobalStyle.largeText}>个人中心</Text>
                <View style={PersonalStyle.phoneView}>
                  <Text style={GlobalStyle.commonText}>184*****681</Text>
                  <Image source={require('./images/noreal.png')} style={PersonalStyle.realFlag} resizeMode="stretch"/>
                </View>
            </View>
            <View style={PersonalStyle.flex2}>
                <Image source={require('../Home/images/head.png')} style={PersonalStyle.headerImg} resizeMode="stretch"/>
            </View>
          </View>
      </View>
    );
  }

  render() {
    return (
      <View style={GlobalStyle.container}>

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

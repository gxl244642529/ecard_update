import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
  RefreshControl
} from 'react-native';

export default class  ActionBar extends Component{
  constructor(props) {
    super(props);
  }
  _rendeItem=(data,index)=>{
    return(
      <TouchableOpacity key={index} style={{flex:1,flexDirection:'row',paddingLeft:20,paddingRight:20,paddingTop:30,paddingBottom:30,justifyContent:'space-between',alignItems:'center',}}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
          <Image style={{width:48,height:48}} resizeMode="contain" source={{uri:data.imgUrl}}></Image>
          <View style={{height:40}}><Text style={{color:'#515151',padding:5}}>{data.title}</Text></View>
        </View>
        <Image style={{width:48,height:48}} resizeMode="contain" source={require('./images/title.png')}></Image>
      </TouchableOpacity>
    )
  }
  render(){
    const {data} = this.props;
    console.log(data);
    return(
      <View>
        {data&&data.map(this._rendeItem)}
      </View>
    );
  }

}

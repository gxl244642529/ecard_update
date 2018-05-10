
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

export default class MainButton extends Component{
  constructor(props) {
    super(props);
  }
  _onPress=()=>{

  }
  _renderMainItemButton=(data,index)=>{
    return(
      <TouchableOpacity style={{alignItems:'center'}} key={index} onPress={this._onPress}>
          <Image source={{uri:data.imgUrl}} style={{width:75,height:75}} resizeMode='contain'></Image>
          <Text style={{marginTop:-5,fontSize:14,color:'#515151'}}>{data.title}</Text>
        </TouchableOpacity>
    )
  }
  render(){
    const {data} = this.props;
    return(
      <View style={{backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-around',paddingBottom:15,paddingLeft:15,paddingRight:15}}>
        {data&&data.map(this._renderMainItemButton)}
      </View>
    )
  }
}

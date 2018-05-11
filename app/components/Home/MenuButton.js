
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

export default class  MenuButton extends Component{
  constructor(props) {
    super(props);
  }
  _rendeItem=(data)=>{
    return(
      <TouchableOpacity style={{alignItems:'center',justifyContent:'center',width:150,height:60}}>
          <Image source={{uri:data.imgUrl}} style={{width:22,height:24}} resizeMode="contain"/>
          <Text style={{marginTop:8,color:'#262626'}}>{data.title}</Text>
      </TouchableOpacity>
    );
  }
  _renderMenuItem=(data,index)=>{
    return(
        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',paddingLeft:15,paddingRight:15,paddingTop:15}} key={index}>
            {this._rendeItem(data[0])}
            {this._rendeItem(data[1])}
            {this._rendeItem(data[2])}
            {this._rendeItem(data[3])}
        </View>
    )
  }
  render(){
    const {data} = this.props;
    var rownum = data&&data.length/4;
    var arr = [];
    var j = 0;
    for (var i = 0; i < rownum; i++) {
      arr.push([data[j],data[j+1],data[j+2],data[j+3]])
      j=j+4;
    }
    return(
      <View style={{backgroundColor:'#fff',marginLeft:15,marginRight:15,marginTop:15,borderRadius:5}}>
          {arr&&arr.map(this._renderMenuItem)}
      </View>
    );
  }
}

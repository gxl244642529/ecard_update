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
const WIDTH = Dimensions.get('window').width;
import Api from '../../../lib/network/Api'
import {isLogin,loginSuccess,onRequireLoginPress} from '../../../lib/LoginUtil'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

export default class Cardousel extends Component{
  constructor(props) {
    super(props);
    let images = [
      {thumbnail:require('./images/card_d1.png')} ,
      {thumbnail:require('./images/card_d1.png')} ,
      {thumbnail:require('./images/card_d1.png')} ,
    ];
    this.state={
      entries:images,
    }
  }
  componentDidMount(){
    let api = this.props&&this.props.api;
    if(api){
      Api.api({
        api:this.props.api,
        success:(result)=>{
          console.log(result);
          this.setState({data:result});
        }
      })
    }

  }
  _renderCardItem ({item, index}, parallaxProps) {
      return (
        <View>
          <TouchableOpacity >
              <ParallaxImage
                  source={require('./images/card_d1.png')}
                  containerStyle={{height:188}}
                  style={{height:350,width:188,resizeMode:'contain'}}
                  parallaxFactor={0.4}
                  {...parallaxProps}
              />
          </TouchableOpacity>
          <View>
            <Text style={{bottom:138,left:25,color:'#fff',zIndex:1000}}>卡备注：</Text>
          </View>
        </View>
      );
  }
  _nocard=()=>{
    //未登录，跳转登录
    //未绑卡。跳转绑卡页面
    console.log("_nocard")
    onRequireLoginPress(this._onPress);
  }
  _onPress=()=>{
    console.log("调用")
  }
  _rendNocard=()=>{
    return(
      <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={this._nocard}>
        <Image source={require('./images/nocard.png')} style={{height:188,width:310,resizeMode:'contain'}}/>
      </TouchableOpacity>
    );
  }
  render(){
    return(
      <View style={{backgroundColor:'#fff'}}>
        {(this.state.data&&this.state.data.length!=0)?<Carousel
          data={this.state.data}
          renderItem={this._renderCardItem}
          sliderWidth={WIDTH}
          itemWidth={310}
          hasParallaxImages={true}
        />:this._rendNocard()}
      </View>
    );
  }
}

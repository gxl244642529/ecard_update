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
import Alert from '../../lib/Alert'
import Sms from '../../lib/Sms'
import Share from '../../lib/Share'
// import Api from '../../lib/network/Api'
const WIDTH = Dimensions.get('window').width;
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import layout from '../../styles/Layout'
import AdvView from '../../../src/widget/AdvView'
import HomeStyle from './index.style.js'
import NavHelper from '../../lib/NavHelper'
import Api from '../../../lib/network/Api'
import MainButton from './MainButton'
import MenuButton from './MenuButton'
import ActionBar from './ActionBar'
import {onRequireLoginPress} from '../../../lib/LoginUtil'
const refreshColors = ['#ff0000','#00ff00','#0000ff','#3ad564'];

class Header extends Component{

  render(){
    return(
      <View style={{backgroundColor:'#fff'}}>
        <View style={{height:50,alignItems:'center',justifyContent:'space-between',flexDirection:'row',marginLeft:15,marginRight:15,marginTop:12}}>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={this.props.onPress}>
            <Image source={require('./images/head.png')} style={{width:30,height:30,marginLeft:15,borderRadius:5}} />
            <Text style={{paddingLeft:14.5}}>184*****681</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity>
              <Image source={require('./images/onli_server.png')} style={{width:20,height:22,margin:14.5}} resizeMode="contain"/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./images/notice.png')} style={{width:20,height:22,marginRight:14.5}} resizeMode="contain"/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}


export default class  Home extends Component{
  static navigationOptions = {
      header:null,
  }
  constructor(props) {
    super(props);
    let images = [
      {thumbnail:require('./images/card_d1.png')} ,
      {thumbnail:require('./images/card_d1.png')} ,
      {thumbnail:require('./images/card_d1.png')} ,
    ];

    let advdata = [
      {img:'http://110.80.22.108:8887/uploads/2018_04_26/8e7afcb27697fe7458fc3092a5842070.jpg',url:'https://www.baidu.com/',title:"测试"},
      {img:'http://110.80.22.108:8887/uploads/2018_04_26/8e7afcb27697fe7458fc3092a5842070.jpg',url:'https://www.baidu.com/',title:"测试"}
    ]

    this.state={
      entries:images,
      isRefreshing:true,
    }

  }
  componentDidMount(){
      this._onRefresh();
  }
  _onRefresh=()=>{
    let data = {channel:'app',gCodes:"main,sub,action"}
    Api.detail(this,{
     api:'acc_base/modules',
     data:data,
     success:this._loadComplete,
     error:this._loadComplete,
     message:this._loadComplete
   });
  }
  _loadComplete=()=>{
   this.setState({isRefreshing:false});
 }
  _onPress=()=>{
    console.log("测试")
    NavHelper.push('Test1');
  }
  _renderCardItem ({item, index}, parallaxProps) {
    return (
        <TouchableOpacity >
            <ParallaxImage
                source={ item.thumbnail}
                containerStyle={{height:188}}
                style={{height:350,width:188,resizeMode:'contain'}}
                parallaxFactor={0.4}
                {...parallaxProps}
            />

        </TouchableOpacity>
    );
}
renderRefresh=()=>{
  return (
    <RefreshControl
        refreshing={this.state.isRefreshing}
        onRefresh={this._onRefresh}
        colors={refreshColors}
        progressBackgroundColor="#ffffff"
      />
  );
}
  render() {
     const refresh = this.renderRefresh();
     return (
       <View style={{flex:1,backgroundColor:'#f3f4f5'}}>

          <Header onPress={()=>{this._onPress()}}/>

          <ScrollView style={{backgroundColor:'#fff',paddingTop:6}}   refreshControl={refresh}>
            <Carousel
              data={this.state.entries}
              renderItem={this._renderCardItem}
              sliderWidth={WIDTH}
              itemWidth={310}
              hasParallaxImages={true}
            />
            <MainButton data={this.state.main}/>
            <MenuButton data={this.state.sub}/>
            <ActionBar  data={this.state.action}/>
            <AdvView ref="ADV" data={this.state.advdata} width={300} height={300}/>
          </ScrollView>
       </View>
     );
   }
}

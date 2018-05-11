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
const SysModule = require('react-native').NativeModules.SysModule;
import Alert from '../../lib/Alert'
import Sms from '../../lib/Sms'
import Share from '../../lib/Share'
// import Api from '../../lib/network/Api'
const WIDTH = Dimensions.get('window').width;
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import layout from '../../styles/Layout'
import AdvView from '../../widget/AdvView'
import HomeStyle from './index.style.js'
import NavHelper from '../../lib/NavHelper'
import Api from '../../../lib/network/Api'
import LoginUtil from '../../../lib/LoginUtil'
import MainButton from './MainButton'
import MenuButton from './MenuButton'
import ActionBar from './ActionBar'
import Header from './Header'
import Cardousel from './Cardousel'
import GlobalStyle from '../GlobalStyle'
import Modules from '../Modules'
// import {onRequireLoginPress} from '../../../lib/LoginUtil'
import {isLogin,loginSuccess,onRequireLoginPress} from '../../../lib/LoginUtil'
const refreshColors = ['#ff0000','#00ff00','#0000ff','#3ad564'];

export default class  Home extends Component{
  static navigationOptions = {
      header:null,
  }
  constructor(props) {
    super(props);
    this.state={
      isRefreshing:true,
    }
  }
  componentDidMount(){
    SysModule.onStartup();
    console.log(isLogin());
      // this._onRefresh();
  }
  // _onRefresh=()=>{
  //   let data = {channel:'app',gCodes:"main,sub,action"}
  //   Api.detail(this,{
  //    api:'acc_base/modules',
  //    data:data,
  //    success:this._loadComplete,
  //    error:this._loadComplete,
  //    message:this._loadComplete
  //  });
  // }
  _loadComplete=(result)=>{
    this.setState(result);
   this.setState({isRefreshing:false});
 }
  _onPress=()=>{
    console.log("测试")
    NavHelper.push('Test1');
  }
_onRefresh=()=>{
  this.ref.MODULES._loadData();
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
       <Modules gCodes={"main,sub,action"} _loadComplete={this._loadComplete}  ref="MODULES">
         <View style={GlobalStyle.container}>
            <Header onPress={()=>{this._onPress()}}/>
            <ScrollView   refreshControl={refresh}>
              <Cardousel api="acc_ecard/homeList"/>
              <MainButton data={this.state.main}/>
              <MenuButton data={this.state.sub}/>
              <ActionBar  data={this.state.action}/>
              <AdvView id="main"/>
            </ScrollView>
         </View>
       </Modules>
     );
   }
}

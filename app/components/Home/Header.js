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
import Account from '../../../lib/network/Account'
import {encodePhone} from '../../widget/PhoneUtil'
import {isLogin,loginSuccess,onRequireLoginPress} from '../../../lib/LoginUtil'
export default class Header extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }
  componentDidMount(){
    console.log(Account.user)
  }
  _personal=()=>{

  }
  _login=()=>{
    onRequireLoginPress(this._onPress);
  }
  _onPress=()=>{
    console.log("调用")
  }

  render(){
    return(

        <View style={{flexDirection:'row',height:50,alignItems:'center',justifyContent:'space-between',marginLeft:15,marginRight:15,marginBottom:10,marginTop:12}}>
          {Account.user.account?<TouchableOpacity style={{flexDirection:'row',flex:0.7,alignItems:'center',backgroundColor:'#fff',borderRadius:5,padding:5}} onPress={this._personal}>
            <Image source={require('./images/head.png')} style={{width:30,height:30,marginLeft:15,borderRadius:5}} />
            <Text style={{paddingLeft:14.5}}>{encodePhone(Account.user.account)}</Text>
          </TouchableOpacity>:<TouchableOpacity style={{flexDirection:'row',flex:0.7,alignItems:'center',backgroundColor:'#fff',borderRadius:5,padding:5}} onPress={this._login}>
            <Image source={require('./images/loginout.png')} style={{width:30,height:30,marginLeft:15,borderRadius:5}} />
            <Text style={{paddingLeft:14.5}}>未登录</Text>
          </TouchableOpacity>
        }
          <View style={{flex:0.3,flexDirection:'row',justifyContent:'center',backgroundColor:'#fff',borderRadius:5,padding:5,marginLeft:15}}>
              <TouchableOpacity>
                <Image source={require('./images/onli_server.png')} style={{width:20,height:30}} resizeMode="contain"/>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft:15}}>
                <Image source={require('./images/notice.png')} style={{width:20,height:30}} resizeMode="contain"/>
              </TouchableOpacity>

          </View>
        </View>

    )
  }
}

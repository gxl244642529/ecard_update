import React, { Component } from 'react';

import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import JPushModule from 'jpush-react-native';
import LargeTitle from '../widget/LargeTitle'
export default class TestJpush extends Component {
  constructor(props) {
    super(props);
  }
  // example
  componentDidMount(){
    // 新版本必需写回调函数
    // JPushModule.notifyJSDidLoad();
    JPushModule.notifyJSDidLoad((resultCode) => {
          if (resultCode === 0) {}
    });
    // 接收自定义消息
   JPushModule.addReceiveCustomMsgListener((message) => {
     console.log(message)
     this.setState({pushMsg: message});
   });
   // 接收推送通知
    JPushModule.addReceiveNotificationListener((message) => {
      console.log( message);
    });
    // 打开通知
    JPushModule.addReceiveOpenNotificationListener((map) => {
      console.log("Opening notification!");
      console.log("map.extra: " + map.extras);
      // 可执行跳转操作，也可跳转原生页面
      // this.props.navigation.navigate("SecondActivity");
    });
  }
  componentWillUnmount() {
    JPushModule.removeReceiveCustomMsgListener();
    JPushModule.removeReceiveNotificationListener();
  }
  // _onPress = () => {
  //   this.props.navigation.navigate('/test/name');
  // };
  _view=()=>{
    return(
      <View style={{height:800}}>
        <Text>asdfads</Text>
      </View>
    )
  }
  render() {
    return (

        <LargeTitle navigation={this.props.navigation} title="测速">
        <View style={{height:800}}>
          <Text>asdfads</Text>
        </View>
        </LargeTitle>

    );
  }
}



import React,{Component} from 'react'
import{
  TouchableOpacity,
  Text
} from 'react-native'
import JPushModule from 'jpush-react-native';

export default class Push extends Component{
  constructor(props){
    super(props);
  }

  notifyJSDidLoad=(resultCode)=>{
    if (resultCode === 0) {

    }
  }

  receiveCustomMsgListener=(message)=>{
    console.log(message);
    // this.props.dispatch({type:'push/receiveCustomMsg'});
  }


  receiveNotificationListener=(message)=>{
    console.log(message);
    // this.props.dispatch({type:'push/recvNotification'});
  }

  receiveOpenNotificationListener=(map)=>{
    console.log("Opening notification!");
    console.log("map.extra: " + map.extras);
    // this.props.dispatch({type:'push/receiveOpenNotification'});
  }

  componentDidMount(){
    // 新版本必需写回调函数
    // JPushModule.notifyJSDidLoad();
    JPushModule.notifyJSDidLoad(this.notifyJSDidLoad);
    // 接收自定义消息
   JPushModule.addReceiveCustomMsgListener(this.receiveCustomMsgListener);
   // 接收推送通知
    JPushModule.addReceiveNotificationListener(this.receiveNotificationListener);
    // 打开通知
    JPushModule.addReceiveOpenNotificationListener(this.receiveOpenNotificationListener);
  }


  componentWillUnmount() {
    JPushModule.removeReceiveCustomMsgListener();
    JPushModule.removeReceiveNotificationListener();
  }

  // App.js    <Push> ... </Push>
  render(){
    return this.props.children;
  }
}

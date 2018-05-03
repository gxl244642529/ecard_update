import React,{Component} from 'react'
import {NativeModules} from 'react-native'
const  SendMessage = NativeModules.SendMessage;

export default class Sms {
  //发送验证码
  static send(phone,callback){
    SendMessage.sendMsg(phone,(result)=>{
      if(result==0){
        callback("发送成功");
      }else {
        let data = result.split("Throwable:");
        let errorData =JSON.parse(data[1]);
        callback(errorData.detail);
      }
      Sms.destroy();
    });
  }
  //验证验证码
  static submitCode(phone,code,callback){
    SendMessage.submitMsg(phone,code,(result)=>{
      if(result==0){
        callback(0);
      }else {
        let data = result.split("Throwable:");
        let errorData =JSON.parse(data[1]);
        callback(errorData.detail);
      }
    Sms.destroy();
    });
  }
  static destroy(){
    SendMessage.onDestroy();
  }

}

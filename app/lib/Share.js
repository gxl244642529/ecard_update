import React, { Component } from 'react';
import{NativeModules} from 'react-native'
const ShareSDKModule = NativeModules.ShareSDKModule;


export default class Share {
  static share(callback){
    ShareSDKModule.share(callback);
  }
}

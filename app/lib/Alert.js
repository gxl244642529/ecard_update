import React,{Component} from 'react'
import {NativeModules} from 'react-native'
const AModule = NativeModules.AlertModule;

export default class A {
  static alert(info,callback){
   		callback = callback || function(){}
   		AModule.alert(info, callback );

   	}

   	static confirm(info,callback){
   		AModule.confirm(info,callback || function(){});
   	}

   	static toast(message){
   		AModule.toast(message);
   	}

   	static wait(message){
   		AModule.wait(message);
   	}
   	static cancelWait(){
   		AModule.cancelWait();
   	}
}

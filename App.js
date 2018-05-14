import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {StatusBar,DeviceEventEmitter} from 'react-native'
import configureStore from './app/Store';
import ReactNavigationPlugin from './app/lib/ReactNavigationPlugin';
import NavHelper from './app/lib/NavHelper';
import Push from './app/connects/Push';
import Navigation from './app/router/Navigation';
import Api from './lib/network/Api'
import Account from './lib/network/Account'
import Notifier from './lib/Notifier'
import {loginSuccess,logoutSuccess} from './lib/LoginUtil'
const store = configureStore();

NavHelper.setPlugin(new ReactNavigationPlugin(store));
export default class App extends Component {
  constructor(props){
    super(props);
    if(props.json){
      Account.user = JSON.parse(props.json);
    }
    Api.isFirst = props.isFirst;
    Api.nfc = this.props.nfc;
    Api.imageUrl = props.imageUrl;
    Api.version= props.version;
    this.subscription = DeviceEventEmitter.addListener(loginSuccess, this.onLoginSuccess);
    this.logout = DeviceEventEmitter.addListener(logoutSuccess, this.onLogoutSuccess);
    // this.headChanged = DeviceEventEmitter.addListener(headChanged, this.headChanged);
    // this.onPush = DeviceEventEmitter.addListener("onPush", this.onPush);
    // this.nfcTag = DeviceEventEmitter.addListener("nfcTag", this.nfcTag);
    // this.gotoRealCard = DeviceEventEmitter.addListener("gotoRealCard", this.gotoRealCard);
    // MapUtil.getPos(this.onGetPos);
  }
  onLoginSuccess=(data)=>{
    let json = data.json;
      Account.user = JSON.parse(json);
      Notifier.notifyObservers(loginSuccess,Account.user);
  }
  render() {
    return (
      <Provider store={store}>

        <Push>
          <Navigation />
        </Push>
      </Provider>
    );
  }
}

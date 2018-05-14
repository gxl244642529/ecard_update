/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,ScrollView } from 'react-native';
import AddServer from './AddServer'
import Traffic from './Traffic'
import {StackNavigator,TabNavigator} from 'react-navigation'
import LargeTitle from '../../widget/LargeTitle'
const ServerTab = TabNavigator({
  Recommend:{
    screen :AddServer,
    navigationOptions:{
      tabBarLabel:'增值服务'
    }
  },
  Introduce:{
    screen :Traffic,
    navigationOptions:{
      tabBarLabel:'交通出行'
    }
  },
},{tabBarPosition: 'top',  // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
    swipeEnabled:true, // 是否允许在标签之间进行滑动。
    animationEnabled: false, // 是否在更改标签时显示动画。
    lazy:true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
    initialRouteName:'', // 设置默认的页面组件
    backBehavior:'none',
    tabBarOptions:{
      showIcon:false,
      activeTintColor:'#262626',
      inactiveTintColor:'#262626',
      style:{backgroundColor:'#fff',paddingTop:6.5,paddingLeft:15},
      labelStyle: {fontSize:15,marginTop:3},
      indicatorStyle:{height:3,backgroundColor:'#fe9026',marginLeft:15},
      tabStyle:{width:110}
  }})
export default class Server extends Component<Props> {
  // static navigationOptions={
  //   title:'理财'
  // }
  render() {
    return (

        <ServerTab/>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

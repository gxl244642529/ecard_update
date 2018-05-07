/**
 * Created by wangfei on 17/8/28.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Button,
    TouchableOpacity,
    AsyncStorage,
    View,
    ScrollView
} from 'react-native';
// import ColorUtil from './ColorUtil'
import AnalyticsUtil from '../lib/AnalyticsUtil'
import NavHelper from '../lib/NavHelper'
import wordStyle from '../styles/size'
export default class UserCenter extends Component {

  constructor(props){
    super(props);
    this.state={
    }
  }

    _onPress=()=>{
      console.log("测试简单的自定义事件")
      AnalyticsUtil.onEvent("test");
      NavHelper.push('TestGesture');

    }
    onScroll=(e)=>{
      let y = e.nativeEvent.contentOffset.y;
      console.log(y);
      if(y > 15){
          let opacity;
          if(y>30){
            opacity = 1;
          }else {
            opacity = y/100;
          }
          this.props.navigation.setParams({headerTitle:'卟噔充值'})
          this.props.navigation.setParams({headerTitleStyle: {  alignSelf:'center',fontSize:14,opacity:opacity}})
      }else{
          this.props.navigation.setParams({headerTitle:''})
      }
    }
    render() {
        const { navigate } = this.props.navigation;

        return (
          <ScrollView onScroll={this.onScroll}>
            <View style={{backgroundColor:'#fff',paddingLeft:15}}>
              <Text style={wordStyle.header}>卟噔充值</Text>
            </View>
            <View style={{height:800,backgroundColor:'red'}}>
                <Text style={wordStyle.header}>测试</Text>
            </View>
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

});

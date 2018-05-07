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
import color from '../styles/Color'
import layout from '../styles/Layout'
import size from '../styles/Size'
export default class LargeTitle extends Component {

  constructor(props){
    super(props);
    this.state={
    }
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
          this.props.navigation.setParams({
            headerTitleStyle: [layout.alignSelf,size.fontSize14,{opacity:opacity}],
            headerTitle:this.props.title
          })
      }else{
          this.props.navigation.setParams({headerTitle:''})
      }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
          <ScrollView onScroll={this.onScroll} style={color.backgroundColor}>
            <View style={layout.paddingLeft}>
              <Text style={[color.largeTitleColor,size.LargeTitleSize28]}>{this.props.title}</Text>
            </View>
            {this.props.children}
          </ScrollView>
        );
    }
}

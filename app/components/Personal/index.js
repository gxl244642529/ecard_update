/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import LargeTitle from '../../widget/LargeTitle'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  // static navigationOptions = ({navigation}) =>({
  //           title:'djkgjk'
  //      });
  constructor(props){
    super(props);
    this.state={

    }
  }
  _onScroll=()=>{
    this.props.navigation.setParams({ headerTitle : 'none' })
  }
  render() {
    return (
      <LargeTitle navigation={this.props.navigation} title="个人中心" onScroll={this._onScroll}>
        <View style={{height:800}}><Text style={styles.welcome}>个人中心</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text></View>
      </LargeTitle>
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

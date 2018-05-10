/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import {StackNavigator,TabNavigator} from 'react-navigation'
import Home from '../components/Home'
import Licai from '../components/Licai'
// import TabRouter from './src/components/TabRouter'
import BackButton from '../widget/BackButton'
import Server from '../components/Server'
import Personal from '../components/Personal'
import Recommend from '../components/Licai/Recommend'
import Introduce from '../components/Licai/Introduce'
import Test1 from '../components/Test'
import TestGesture from '../components/TestGesture'
import TestJpush from '../components/TestJpush'
// import HomeTab from './TabNavigators'
import HomeTab from '../connects/HomeTab'
// import RouterTest from '../components/ReactRouter/RouterTest'

import {
  Home_Fou,
  Home_NoFou,
  Licai_Fou,
  Licai_NoFou,
  Server_Fou,
  Server_NoFou,
  My_Fou,My_NoFou
} from '../resources/ImageResources'


const StackOptions = ({navigation}) => {


  return {
      headerTintColor: '#606060',
      headerStyle:{height:45,elevation: 0 },
      headerBackTitle:null,
      headerTitleStyle : navigation.state.params&&navigation.state.params.headerTitleStyle,
      headerLeft:<BackButton onPress={()=>{navigation.goBack()}}/>,
      headerRight:( <Text ></Text> ),
      headerTitle:navigation.state.params&&navigation.state.params.headerTitle

    };
};

export default  AppNavigator = StackNavigator({
  // TestJpush:{
  //   screen:TestJpush,
  //
  // },

  HomeTab: {screen: HomeTab,
  navigationOptions: ({navigation}) => StackOptions({navigation})
  },
  Test1:{
    screen:Test1,
  },
  Licai:{
    screen:Licai,
  }
},{ navigationOptions: ({navigation}) => StackOptions({navigation})});

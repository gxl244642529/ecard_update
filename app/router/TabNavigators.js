import React, {Component} from 'react'
import {StackNavigator,TabNavigator} from 'react-navigation'
import Home from '../components/Home'
import Licai from '../components/Licai'
import Server from '../components/Server'
import Personal from '../components/Personal'
import Recommend from '../components/Licai/Recommend'
import Introduce from '../components/Licai/Introduce'
import{
  Image
} from 'react-native'

import {
  Home_Fou,
  Home_NoFou,
  Licai_Fou,
  Licai_NoFou,
  Server_Fou,
  Server_NoFou,
  My_Fou,My_NoFou
} from '../resources/ImageResources'

const LicaiTab = TabNavigator({
  Recommend:{
    screen :Recommend,
    navigationOptions:{
      tabBarLabel:'理财推介'
    }
  },
  Introduce:{
    screen :Introduce,
    navigationOptions:{
      tabBarLabel:'惠民理财说'
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
      style:{backgroundColor:'#ffffff',paddingTop:6.5,},
      labelStyle: {fontSize:15,marginTop:3},
      indicatorStyle:{height:3,backgroundColor:'#fe9026',},
      tabStyle:{width:110}
  }})



export default HomeTab = TabNavigator({


    Licai: {
        screen:Licai,
        navigationOptions: ()=> TabOptions('理财',Licai_NoFou,Licai_Fou,'理财'),
    },
    Home: {
        screen: Home,
        navigationOptions: ()=> TabOptions('首页',Home_NoFou,Home_Fou,'首页'),
    },
    Server: {
        screen:Server,
        navigationOptions: ()=> TabOptions('服务',Server_NoFou,Server_Fou,'服务'),
    },
    Personal:{
        screen:Personal,
        navigationOptions: (navigation)=> TabOptions('我的',My_NoFou,My_Fou,'我的'),
    },
},{
    tabBarPosition:'bottom', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
    swipeEnabled:true, // 是否允许在标签之间进行滑动。
    animationEnabled: false, // 是否在更改标签时显示动画。
    lazy:true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
    initialRouteName:'', // 设置默认的页面组件
    backBehavior:'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions:{
      showIcon:true,
      activeTintColor:'#ffb33a',
      inactiveTintColor:'#bfbfbf',
      style:{backgroundColor:'#fff',paddingTop:6},
      labelStyle: {fontSize:14,marginTop:3},
      indicatorStyle:{height:0},
      tabStyle:{height:60,}
  }

});


const TabOptions = (tabBarTitle,normalImage,selectedImage,navTitle) => {
    const tabBarLabel = tabBarTitle;
    const tabBarIcon = (({focused})=> {
        return(
            <Image
                source={!focused ? normalImage : selectedImage}
                style={[{height:24,width:24,resizeMode:'contain',}]}

            />
        )
    });
    const headerTitle = navTitle;
    const headerTitleStyle = {fontSize:22,color:'white',alignSelf:'center'};
    const headerStyle = {backgroundColor:'#fff'};
    const tabBarVisible = true;
    return {tabBarLabel,tabBarIcon,headerTitle,headerTitleStyle,headerStyle,tabBarVisible};
};

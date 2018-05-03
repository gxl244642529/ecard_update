import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import Alert from '../../lib/Alert'
import Sms from '../../lib/Sms'
import Share from '../../lib/Share'
import Api from '../../lib/network/Api'
const WIDTH = Dimensions.get('window').width;
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

class Header extends Component{

  render(){
    return(
      <View style={{backgroundColor:'#fff'}}>
        <View style={{height:50,alignItems:'center',justifyContent:'space-between',flexDirection:'row',marginLeft:15,marginRight:15,marginTop:12}}>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={this.props.onPress}>
            <Image source={require('./images/head.png')} style={{width:30,height:30,marginLeft:15,borderRadius:5}} />
            <Text style={{paddingLeft:14.5}}>184*****681</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity>
              <Image source={require('./images/onli_server.png')} style={{width:20,height:22,margin:14.5}} resizeMode="contain"/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./images/notice.png')} style={{width:20,height:22,marginRight:14.5}} resizeMode="contain"/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
export default class  Home extends Component{
  constructor(props) {
    super(props);
    let images = [
      {thumbnail:require('./images/card_d1.png')} ,
      {thumbnail:require('./images/card_d1.png')} ,
      {thumbnail:require('./images/card_d1.png')} ,
    ]
    this.state={
      entries:images,
    }

  }
  componentDidMount(){
        console.log(WIDTH)
  }
  _onPress=()=>{
    // Sms.send("18950167506",(result)=>{
    //   Alert.toast(result);
    //   console.log(result);
    // })
    // Sms.submitCode("18459150681","8681",(result)=>{
    //
    //   Alert.alert(result);
    // })

    // Share.share((resulet)=>{
    //   console.log(resulet);
    // })
    // let data ={table:"adv",fields:"*",condition:[{"field":"AD_ID","sign":"=","value":"0"}]}
    // let sdata = {type:"fetch",curd:{table:"adv",fields:"*",condition:[{field:"AD_ID",sign:"=",value:"0"}]}}
    // let data ={list:[sdata,sdata]}
    let update = {curd:"update",data:{table:"adv",fields:[{field:"AD_TITLE",value:"修改标题"}],condition:[{field:"AD_ID",sign:"=",value:"0"}]}}
    let fetch= {curd:"fetch",data:{table:"adv",fields:"AD_ID,AD_TITLE",condition:[{field:"AD_ID",sign:"=",value:"0"}]}}
    let data = {list:[update,fetch]}

    Api.api({
      api:"curd/curdSet",
      data:data,
      success:(result)=>{
        console.log(result);
      }
    })

  }
  _renderItem ({item, index}, parallaxProps) {
    console.log("测试")
    console.log(item)
    return (
        <View >
            <ParallaxImage
                source={ item.thumbnail}
                containerStyle={{height:188}}
                style={{height:350,width:188,resizeMode:'contain'}}
                parallaxFactor={0.4}
                {...parallaxProps}
            />

        </View>
    );
}
  render() {
     return (
       <ScrollView >

          <Header onPress={()=>{this._onPress()}}/>

          <View style={{backgroundColor:'#fff',paddingTop:11}}>
            <Carousel
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={WIDTH}
              itemWidth={310}
              hasParallaxImages={true}
            />
        </View>


       </ScrollView>
     );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaeaeb',
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

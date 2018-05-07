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
  ImageBackground
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
class MainButton extends Component{
  constructor(props) {
    super(props);
  }
  _renderMainItemButton=(data,index)=>{
    return(
      <TouchableOpacity style={{alignItems:'center'}} key={index} onPress={this.props.onPress}>
          <Image source={data.thumbnail} style={{width:75,height:75}} resizeMode='contain'></Image>
          <Text style={{marginTop:-5,fontSize:14,color:'#515151'}}>{data.title}</Text>
        </TouchableOpacity>
    )
  }
  render(){
    const {data} = this.props;
    return(
      <View style={{backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-around',paddingBottom:15,paddingLeft:15,paddingRight:15}}>
        {data&&data.map(this._renderMainItemButton)}
      </View>
    )
  }
}
class  MenuButton extends Component{
  constructor(props) {
    super(props);
  }
  _rendeItem=(data)=>{
    return(
      <TouchableOpacity style={{alignItems:'center',justifyContent:'center',width:150,height:60}}>
          <Image source={data.thumbnail} style={{width:22,height:24}} resizeMode="contain"/>
          <Text style={{marginTop:8,color:'#262626'}}>{data.title}</Text>
      </TouchableOpacity>
    );
  }
  _renderMenuItem=(data,index)=>{
    return(
        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',paddingLeft:15,paddingRight:15,paddingTop:15}} key={index}>
            {this._rendeItem(data[0])}
            {this._rendeItem(data[1])}
            {this._rendeItem(data[2])}
            {this._rendeItem(data[3])}
        </View>
    )
  }
  render(){
    const {data} = this.props;
    var rownum = data.length/4;
    var arr = [];
    var j = 0;
    for (var i = 0; i < rownum; i++) {
      arr.push([data[j],data[j+1],data[j+2],data[j+3]])
      j=j+4;
    }
    return(
      <View style={{backgroundColor:'#fff',marginTop:5}}>
          {arr&&arr.map(this._renderMenuItem)}
      </View>
    );
  }
}
class  ActionBar extends Component{
  constructor(props) {
    super(props);
  }

}
export default class  Home extends Component{
  constructor(props) {
    super(props);
    let images = [
      {thumbnail:require('./images/card_d1.png')} ,
      {thumbnail:require('./images/card_d1.png')} ,
      {thumbnail:require('./images/card_d1.png')} ,
    ];
    let mainImg = [
      {thumbnail:require('./images/recharge.png'),title:"卟噔充值"} ,
      {thumbnail:require('./images/buy.png'),title:"买卡"} ,
      {thumbnail:require('./images/myecard.png'),title:"我的e通卡"} ,
      {thumbnail:require('./images/openlost.png'),title:"挂失服务"} ,
    ];
    let menuImg =[
      {thumbnail:require('./images/discard.png'),title:"优惠卡办理",ismore:false} ,
      {thumbnail:require('./images/exam.png'),title:"年审",ismore:false} ,
      {thumbnail:require('./images/ticket.png'),title:"电子发票",ismore:false} ,
      {thumbnail:require('./images/netpot.png'),title:"网点查询",ismore:false} ,
      {thumbnail:require('./images/blue.png'),title:"蓝牙充值",ismore:false} ,
      {thumbnail:require('./images/lost.png'),title:"拾卡不昧",ismore:false} ,
      {thumbnail:require('./images/bus.png'),title:"公交查询",ismore:false} ,
      {thumbnail:require('./images/more.png'),title:"更多",ismore:true} ,
    ]

    this.state={
      entries:images,
      mainImg:mainImg,
      menuImg:menuImg
    }

  }
  componentDidMount(){
        console.log(WIDTH)
  }
  _onPress=()=>{
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
  _renderCardItem ({item, index}, parallaxProps) {
    return (
        <TouchableOpacity >
            <ParallaxImage
                source={ item.thumbnail}
                containerStyle={{height:188}}
                style={{height:350,width:188,resizeMode:'contain'}}
                parallaxFactor={0.4}
                {...parallaxProps}
            />

        </TouchableOpacity>
    );
}
  render() {
     return (
       <ScrollView style={{backgroundColor:'#fff'}}>

          <Header onPress={()=>{this._onPress()}}/>

          <View style={{backgroundColor:'#fff',paddingTop:6}}>
            <Carousel
              data={this.state.entries}
              renderItem={this._renderCardItem}
              sliderWidth={WIDTH}
              itemWidth={310}
              hasParallaxImages={true}
            />
            <MainButton data={this.state.mainImg}/>
            <MenuButton data={this.state.menuImg}/>
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

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
  View ,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import LargeTitle from '../../widget/LargeTitle'
class ProductList extends Component{
  constructor(props) {
    super(props)
  }
  _onPress=()=>{
  }
  _rendeItem=(data,index)=>{
    return  <TouchableOpacity onPress={this._onPress} key={index}>
      <Text style={{fontSize:10,color:'#808080'}}>{data.title}</Text>
      <Image style={{height:90,width:330}} resizeMode="stretch" source={data.img}/>
    </TouchableOpacity>
  }
  render(){
    const {data} = this.props;
    return(
        <View style={{marginTop:10,marginLeft:15,marginRight:15}}>
          {data&&data.map(this._rendeItem)}
        </View>
    );
  }
}
class SelectList extends Component{
  constructor(props) {
    super(props)
  }
  _onPress=()=>{

  }
  _rendeItem=(data,index)=>{
    console.log(data);
    return(
      <TouchableOpacity onPress={this._onPress} key={index}>
        <Image style={{width:170,height:107}} source={data.img} resizeMode="stretch"/>
      </TouchableOpacity>
    );
  }
  render(){
    const {data} = this.props;
    return(
      <View style={{paddingTop:10,marginLeft:15,marginRight:15}}>
        <Text style={{fontSize:10,color:'#808080'}}>精选理财</Text>
        <ScrollView horizontal={true}>
          {data&&data.map(this._rendeItem)}
        </ScrollView>
      </View>
    )
  }
}


export default class Recommend extends Component<Props> {
  constructor(props){
    super(props);
    let products = [
      {title:'浙金理财',img:require('./images/pro.png'),url:'https://www.baidu.com'},
      {title:'浙金理财',img:require('./images/pro.png'),url:'https://www.baidu.com'},
    ];
    let selects = [
      {img:require('./images/select.png'),url:'https://www.baidu.com'},
      {img:require('./images/select.png'),url:'https://www.baidu.com'},
    ]
    this.state={
      products:products,
      selects:selects,
    }
  }
  render() {
    return (
     <ScrollView style={{flex:1,backgroundColor:'#f8f9fa'}}>
        <View style={{backgroundColor:"red",margin:15,height:150,borderRadius:5}}>
        </View>
        <SelectList data={this.state.selects}/>
        <ProductList data={this.state.products}/>
      </ScrollView>
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

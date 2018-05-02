
import React, { Component, } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from '../../lib/Common';
import PropTypes from 'prop-types'



export default class Button extends Component{




  constructor(props) {
    super(props);
  }


  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.style !== this.props.style || nextProps.textStyle!== this.props.textStyle || nextProps.icon !== this.props.icon;
  }

  render(){
    let {icon,iconStyle} = this.props;
    let img = icon && <Image source={icon} style={iconStyle} />

    let textStyle;
    if(this.props.textStyle){
      if(this.props.iconPadding){
        textStyle = [styles.text,this.props.textStyle,{marginTop:this.props.iconPadding}];
      }else{
        textStyle = [styles.text,this.props.textStyle];
      }
    }else{
      if(this.props.iconPadding){
         textStyle = [styles.text,{marginTop:this.props.iconPadding}];
      }else{
        textStyle = styles.text;
      }

    }

    return (
      <TouchableOpacity
        style={[styles.button,this.props.style]}
        onPress={this.props.onPress}>
          {img}
          <Text style={textStyle}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }




  static propTypes={
     text:  PropTypes.string.isRequired,      //文字
     icon:  PropTypes.any,                   //图片，应该使用require
     iconStyle :  PropTypes.any,


  }
}

const styles = StyleSheet.create({
  text:{
    color:'#9F9FA0'
  },
  button:{
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FEFEFE',
    // borderRadius:3,
  }

});

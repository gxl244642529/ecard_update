import React, { Component } from 'react';
import {
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types'
const DatePickerModule = require('react-native').NativeModules.DatePickerModule;

export default class MonthPicker extends Component{

	static propTypes = {
		/**
		 * 提示
		 * @type {[type]}
		 */
	  placeHolder: PropTypes.string,
	  /**
	   * 月份：格式yyyy-MM
	   * @type {[type]}
	   */
	  value: PropTypes.string,
	}

	constructor(props) {
	  super(props);
	  this.state = {};
	}

	onPress=()=>{
		let self = this;
		 DatePickerModule.select(this.props.value,this.props.placeHolder,"month",(date)=>{
		 	self.props.onChange && self.props.onChange(date);
		 });
	}

	render(){
		return (
			<TouchableOpacity style={this.props.style} onPress={this.onPress}>{this.props.children}</TouchableOpacity>
		);
	}

}

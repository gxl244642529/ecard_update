

import React,{Component} from 'react'
import{
  TouchableOpacity,
  Text
} from 'react-native'
import Api from '../../lib/network/Api'

export default class Modules extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){

    this._loadData();
      // this.refs.MODULES._loadData()
  }

  _loadData=()=>{
    let data = {channel:'app',gCodes:this.props.gCodes}
    Api.detail(this,{
     api:'acc_base/modules',
     data:data,
     success:this.props._loadComplete,
     error:this.props._loadComplete,
     message:this.props._loadComplete
   });
  }
  _loadComplete=()=>{
       this.setState(result);
      this.setState({isRefreshing:false});
  }
  render(){
    return this.props.children;
  }
}

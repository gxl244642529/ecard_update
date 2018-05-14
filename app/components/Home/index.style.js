import {
  StyleSheet
} from 'react-native'
import {Layout,Size,Color} from '../../styles'

export default  HomeStyle = StyleSheet.create({
  item:{
    marginLeft:Layout.commonRange,
    marginRight:Layout.commonRange,
    marginTop:Layout.Top10,
    padding:Layout.commonRange,
    flexDirection:Layout.direction,
    justifyContent:Layout.between,
    backgroundColor:Color.white,
    borderRadius:Layout.radius,
  },
  nextIcon:{
    width:24,
    height:24
  },
  itemtext:{
    color:Color.largeTitleColor,
    fontSize:Size.fontSize16,
  },
  headerView:{
    flexDirection:Layout.direction,
    backgroundColor:Color.white,
    paddingBottom:Layout.Top10
  },
  headerViewflex:{
    marginLeft:Layout.commonRange,
    marginRight:Layout.commonRange,
    flex:Layout.flex,
    flexDirection:Layout.direction,
    justifyContent:Layout.between,
  },
  flex8:{
    flex:0.8
  },
  flex2:{
    flex:0.2,
    alignItems:Layout.center
  },
  phoneView:{
    flexDirection:Layout.direction,
    alignItems:Layout.center
  },
  realFlag:{
    width:50,height:16,marginLeft:5
  },
  headerImg:{
    height:50,width:50,borderRadius:7
  },



});

import{
  StyleSheet
} from 'react-native'
import {
  Layout,
  Size,
  Color
} from '../styles'

export default GlobalStyle = StyleSheet.create({
  container:{
    flex:Layout.flex,
    backgroundColor:Color.backgroundColor,
  },
  largeText:{
    fontSize:Size.fontSize28,
    color:Color.largeTitleColor,
  },
  commonText:{
    fontSize:Size.fontSize16,
    color:Color.largeTitleColor,
  }
})

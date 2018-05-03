/**
 * Created by wangfei on 17/8/28.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Button,
    TouchableOpacity,
    AsyncStorage,
    View
} from 'react-native';
// import ColorUtil from './ColorUtil'
import AnalyticsUtil from '../lib/AnalyticsUtil'
import NavHelper from '../lib/NavHelper'
export default class UserCenter extends Component {

    _onPress=()=>{
      console.log("测试简单的自定义事件")
      AnalyticsUtil.onEvent("test");
        NavHelper.push('TestGesture');
        var hash = "123";
        var js = `{
        	hash:'${hash}'
        }`;
        console.log(js);
    }
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.u_c}>
              <TouchableOpacity onPress={this._onPress}>
                <Text>测试简单的集成事件</Text>
              </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    u_c: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        // backgroundColor: ColorUtil.background,
    },
    u_c_item: {
        margin: 10,
        // backgroundColor: ColorUtil.default_primary_color,
        elevation: 10,
        // borderColor: ColorUtil.default_primary_color,

        borderWidth: 1.5,
        shadowOffset: {width: 0, height: 0},
        // shadowColor: ColorUtil.default_primary_color,
        shadowOpacity: 1,
        shadowRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',

    },
    u_c_text: {
        fontSize:24,

        // color: ColorUtil.text_primary_color
    },
});

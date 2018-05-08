import React, { Component } from 'react';
import {
  StyleSheet,
  Alert,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import GesturePassword from './Smart-GesturePassword';
const WIDTH = Dimensions.get('window').width;
const LOGIN_MESSAGE = '请输入手势密码';
const SETTING_MESSAGE = '与上一次绘制不一致,请重新绘制';
// const LOGIN_MESSAGE = "请输入手势密码";
const CHANGE_MESSAGE = '请输入原手势密码';
const CHANGE_MESSAGE_ERROR = '错误超限,手势密码已失效，请重新登录';
const FORGET_PSD = '忘记手势，可以使用账号密码登录，登录后需要重新绘制手势密码';
const ERROR_COUNT = 5;
export default class GesturePasswordSet extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    const { message, cachedPassword } = this.props;
    this.state = {
      isWarning: false,
      errorCount: ERROR_COUNT,
      message: message ? message : '请输入手势密码',
      messageColor: '#A9A9A9',
      password: '',
      thumbnails: [],
    };
    this._cachedPassword = cachedPassword ? cachedPassword : '';
  }

  componentDidMount() {
    // this._cachedPassword = '13457' //get cached gesture password
  }

  render() {
    return (
      <GesturePassword
        gestureAreaLength={WIDTH * 0.78}
        style={{ paddingTop: WIDTH * 0.178 }}
        pointBackgroundColor={'#F4F4F4'}
        isWarning={this.state.isWarning}
        color={'#fe7723'}
        activeColor={'#fe7723'}
        warningColor={'red'}
        warningDuration={100}
        allowCross={true}
        topComponent={this._renderDescription()}
        bottomComponent={this._renderActions()}
        onFinish={this._onFinish}
        onReset={this._onReset}
      />
    );
  }

  _renderThumbnails() {
    let thumbnails = [];
    for (let i = 0; i < 9; i++) {
      let active = ~this.state.password.indexOf(i);
      thumbnails.push(
        <View
          key={'thumb-' + i}
          style={[
            { width: 8, height: 8, margin: 2, borderRadius: 8 },
            active
              ? { backgroundColor: '#00AAEF' }
              : { borderWidth: 1, borderColor: '#A9A9A9' },
          ]}
        />
      );
    }
    return (
      <View style={{ width: 38, flexDirection: 'row', flexWrap: 'wrap' }}>
        {thumbnails}
      </View>
    );
  }

  _renderDescription = () => {
    return (
      <View
        style={{
          height: 158,
          paddingBottom: 10,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        {this._renderThumbnails()}
        <Text
          style={{
            fontFamily: '.HelveticaNeueInterface-MediumP4',
            fontSize: 14,
            marginVertical: 6,
            color: this.state.messageColor,
          }}
        >
          {this.state.message}
        </Text>
      </View>
    );
  };

  _renderActions = () => {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 50,
          flex: 1,
          width: WIDTH,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity style={{ padding: 5 }} onPress={this._forget}>
          <Text style={{ fontSize: 16 }}>忘记手势?</Text>
        </TouchableOpacity>
        <Text style={{ color: '#ccc' }}>|</Text>
        <TouchableOpacity style={{ padding: 5 }} onPress={this._changeAcc}>
          <Text style={{ fontSize: 16 }}>切换账号</Text>
        </TouchableOpacity>
      </View>
    );
  };

  _onReset = () => {
    let isWarning = false;
    let password = '';
    this.setState({
      isWarning,
    });
  };
  _login = password => {
    let isWarning, message, messageColor;
    if (password != this._cachedPassword) {
      let count = this.state.errorCount - 1;
      if (count == 0) {
        message = '错误超限，手势密码已失效，请重新登录';
        Alert.alert(
          '提示',
          CHANGE_MESSAGE_ERROR,
          [{ text: '密码登录', onPress: () => console.log('重新登录') }],
          { cancelable: false }
        );
      } else {
        isWarning = true;
        message = '密码输入错误,你还可以输入' + count + '次';
        messageColor = 'red';
      }

      this.setState({ errorCount: count });
    } else {
      isWarning = false;
      Alert.alert('登录成功');
      this.props.success && this.props.success();
    }
    this.setState({ password, isWarning, message, messageColor });
  };
  _setting = password => {
    let isWarning, message, messageColor;
    if (password.length < 4) {
      isWarning = true;
      message = '至少连接4个点请重新设置';
      messageColor = 'red';
      this.setState({ isWarning, message, messageColor });
      return;
    }
    if (this._cachedPassword == '') {
      this.setState({ password });
      this._cachedPassword = password;
      isWarning = true;
      message = '请再次输入手势密码';
      messageColor = '#00AAEF';
    } else if (this._cachedPassword != '' && this._cachedPassword != password) {
      // this.setState({password})
      isWarning = true;
      message = '与上一次绘制不一致,请重新绘制';
      messageColor = 'red';
    } else if (this._cachedPassword == password) {
      isWarning = false;
      message = '设置成功';
      messageColor = '#00AAEF';
    }
    this.setState({ isWarning, message, messageColor });
  };
  _forget = () => {
    console.log('忘记密码');
    Alert.alert(
      '提示',
      FORGET_PSD,
      [
        { text: '取消', onPress: () => console.log('取消') },
        { text: '密码登录', onPress: () => console.log('重新登录') },
      ],
      { cancelable: false }
    );
  };
  _changeAcc = () => {
    console.log('切换账号');
    //跳转到切换账号页
  };

  _onFinish = password => {
    let flag = this.props.flag ? this.props.flag : 'login';
    switch (flag) {
      case 'login':
        this._login(password);
        break;
      case 'setting':
        this._setting(password);
        break;
      case 'change':
        this._setting(password);
        break;
      default:
    }
  };
}

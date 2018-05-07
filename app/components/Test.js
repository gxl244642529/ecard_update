import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import * as counterAction from '../actions/CounterAction';

class Button extends Component {
  render() {
    const { text, onClick } = this.props;
    return (
      <TouchableOpacity style={styles.Button} onPress={onClick}>
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  }
}
export default class Test extends Component {
  render() {
    const { decrementFn, incrementFn, counter } = this.props;
    return (
      <View style={styles.container}>
        <Button onClick={decrementFn} text={'减'} />
        <Text style={styles.label}>{counter}</Text>
        <Button onClick={incrementFn} text={'加'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Button: {
    width: 60,
    height: 20,
    borderWidth: 1,
    borderColor: 'lightgray',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: 200,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  label: {
    width: 40,
    textAlign: 'center',
  },
});

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/Store';
import ReactNavigationPlugin from './app/lib/ReactNavigationPlugin';
import NavHelper from './app/lib/NavHelper';
import Push from './app/connects/Push';
import Navigation from './app/router/Navigation';

const store = configureStore();

NavHelper.setPlugin(new ReactNavigationPlugin(store));
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Push>
        <Navigation />
        </Push>
      </Provider>
    );
  }
}

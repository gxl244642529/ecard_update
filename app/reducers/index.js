'use strict';

import { combineReducers } from 'redux';
import counter from './CounterReducer';

const rootReducer = combineReducers({
  counter: counter,
});

export default rootReducer;

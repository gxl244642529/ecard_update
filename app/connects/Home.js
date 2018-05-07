import Test from '../components/Test';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import * as counterAction from '../actions/CounterAction';

const Test = connect(
  state => ({
    counter: state.counter.count,
  }),
  dispatch => ({
    incrementFn: () => dispatch(counterAction.increment()),
    decrementFn: () => dispatch(counterAction.decrement()),
  })
)(Test);

const Test1 = connect(
  state => ({
    counter: state.counter.count,
  }),
  dispatch => ({
    incrementFn: () => dispatch(counterAction.increment()),
    decrementFn: () => dispatch(counterAction.decrement()),
  })
)(Test);

export { Test, Test1 };

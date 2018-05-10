import Test from '../components/Test';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import * as counterAction from '../actions/CounterAction';
import Main from '../components/Home';

export default Test1 = connect(
  state => ({
    counter: state.counter.count,
  }),
  dispatch => ({
    incrementFn: () => dispatch(counterAction.increment()),
    decrementFn: () => dispatch(counterAction.decrement()),
  })
)(Test);

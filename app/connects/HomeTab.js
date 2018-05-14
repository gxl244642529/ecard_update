import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import * as counterAction from '../actions/CounterAction';
import HomeTab from '../router/TabNavigators';


export default  HomeTabConnect = connect(
  state => ({
    // counter: state.counter.count,
  }),
  dispatch => ({
    // incrementFn: () => dispatch(counterAction.increment()),
    // decrementFn: () => dispatch(counterAction.decrement()),
  })
)(HomeTab);

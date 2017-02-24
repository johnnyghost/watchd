import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navigatorActionCreators }  from 'store/actions/';
import Navigator from './components/Navigator';

/**
 * Will subscribe to Redux store updates
 *
 * @method
 *
 * @param  {Object} state Store’s state
 * @return {Object} and returns an object to be passed as props
 */
const mapStateToProps = (state):Object => {
  
  return {
    navigator: state.navigator,
    routes: state.navigator.routes,
    selected: state.navigator.selected
  }
};

/**
 * Bound to the store.
 * Will be merged into the component’s props.
 *
 * @method
 *
 * @param {Function} dispatch Dispatch function
 * @return {Object}
 */
const mapDispatchToProps = (dispatch:Function):Object => ({
  selectTab: bindActionCreators(navigatorActionCreators.selectTab, dispatch),
  push: bindActionCreators(navigatorActionCreators.push, dispatch),
  pop: bindActionCreators(navigatorActionCreators.pop, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigator);

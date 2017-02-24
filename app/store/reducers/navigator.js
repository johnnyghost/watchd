import NAVIGATION_CONSTANTS from 'store/constants/navigator';
import { createReducer } from 'store/utils';
import routes from 'store/constants/routes';
import { NavigationExperimental } from 'react-native';
const { StateUtils: NavigationStateUtils } = NavigationExperimental;

/**
 * The initial state.
 * @type {Object}
 */
const initialState = {
  index: 0,
  routes: [routes.search],
  selected: 'search'
};

/**
 * Fetch Movies success
 *
 * @method
 *
 * @param  {Object} state The state
 * @param  {String} tab  The selected tab
 *
 * @return {Object} The current state
 */
const selectTab = (state:Object, tab:string):Object => ({
  ...state,
  routes: [routes[tab]],
  selected: tab
});

/**
 * Push to another scene.
 * 
 * @method
 *
 * @param  {Object} state The state
 * @param  {String} key  The scene key
 * @return {Object} The current state
 */
const push = (state:Object, key:string):Object => {
  return NavigationStateUtils.push(state, routes[key]);
}

/**
 * Pop to another scene.
 * 
 * @method
 *
 * @param  {Object} state The state
 * @return {Object} The current state
 */
const pop = (state:Object):Object => {
  return NavigationStateUtils.pop(state);
}

export default createReducer(initialState, {
  [NAVIGATION_CONSTANTS.SELECT_TAB]: selectTab,
  [NAVIGATION_CONSTANTS.PUSH]: push,
  [NAVIGATION_CONSTANTS.POP]: pop
});

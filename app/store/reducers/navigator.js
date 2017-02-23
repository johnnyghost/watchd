import NAVIGATION_CONSTANTS from 'store/constants/navigator';
import { createReducer } from 'store/utils';
import routes from 'store/constants/routes';

/**
 * The initial state.
 * @type {Object}
 */
const initialState = {
  routes,
  selected: 'search'
};

/**
 * Fetch Movies success
 *
 * @method
 *
 * @param  {Object} state The state
 * @param  {Object} data  The data received
 *
 * @return {Object} The current state
 */
const selectTab = (state:Object, {tab}:Object):Object => ({
  ...state,
  selected: tab
});

export default createReducer(initialState, {
  [NAVIGATION_CONSTANTS.SELECT_TAB]: selectTab
});

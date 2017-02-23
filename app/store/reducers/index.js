import { combineReducers } from 'redux';
import moviesReducer from './movies';
import navigatorReducer from './navigator';
/**
 * Combine all reducers.
 */
const appReducer = combineReducers({
  movies: moviesReducer,
  navigator: navigatorReducer
});

/**
 * Delegates to the appReducer.
 *
 * @method
 * @private
 *
 * @param  {Object} state  The state object
 * @param  {Object} action The action
 * @return {Object}
 */
const rootReducer = (state:?Object, action:Object):Object => appReducer(state, action);

export default rootReducer;
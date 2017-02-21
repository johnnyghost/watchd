import { combineReducers } from 'redux';
import moviesReducer from './movies';
console.log(moviesReducer);
/**
 * Combine all reducers.
 */
const appReducer = combineReducers({
  movies: moviesReducer
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
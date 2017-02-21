import MOVIES_CONSTANTS from 'store/constants/movies';
import { createReducer } from 'store/utils';

/**
 * The initial state.
 * @type {Object}
 */
const initialState = {
  list: [],
  isLoading: false
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
const searchMoviesSuccess = (state:Object, data:Object):Object => ({
  ...state,
  list: data.results,
  isLoading: false
});


/**
 * Fetch Movies request
 *
 * @method
 *
 * @param  {Object} state The state
 *
 * @return {Object} The current state
 */
const searchMoviesRequest = (state:Object):Object => {
  return {
    ...state,
    list: [],
    isLoading: true
  };
}

export default createReducer(initialState, {
  [MOVIES_CONSTANTS.SEARCH_MOVIES_REQUEST]: searchMoviesRequest,
  [MOVIES_CONSTANTS.SEARCH_MOVIES_SUCCESS]: searchMoviesSuccess
});

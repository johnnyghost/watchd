import MOVIES_CONSTANTS from 'store/constants/movies';

type ActionType = {
  type: string;
  payload?: ?any;
}

/**
 * Dispatch an action to request the search movies.
 *
 * @method searchMoviesRequest
 * @public
 *
 * @return {Object}
 */
export const searchMovie = (query: string):ActionType => ({
  type: MOVIES_CONSTANTS.SEARCH_MOVIES_REQUEST,
  payload: {
    query
  }
})

/**
 * Dispatch an action to the success of the searched movies.
 *
 * @method searchMoviesSuccess
 * @public
 *
 * @param {Array} movies The movies list
 *
 * @return {Object}
 */
export const searchMoviesSuccess = (movies:Array):ActionType => ({
  type: MOVIES_CONSTANTS.SEARCH_MOVIES_SUCCESS,
  payload: movies
})
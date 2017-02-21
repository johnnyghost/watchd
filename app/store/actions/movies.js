import MOVIES_CONSTANTS from 'store/constants/movies';

type FetchReposRequestType = {
  type: string;
}

type FetchReposSuccessType = {
  type: string;
  payload: ?any;
}

/**
 * Dispatch an action to request the search movies.
 *
 * @method searchMoviesRequest
 * @public
 *
 * @return {Object}
 */
export const searchMoviesRequest = ():FetchReposRequestType => ({
  type: MOVIES_CONSTANTS.SEARCH_MOVIES_REQUEST
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
export const searchMoviesSuccess = (movies:Array):FetchReposSuccessType => ({
  type: MOVIES_CONSTANTS.SEARCH_MOVIES_SUCCESS,
  payload: movies
})
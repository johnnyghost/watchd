import { put, call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { TMDBClient } from 'core/clients'
import MOVIES_CONSTANTS from 'store/constants/movies';
console.log(TMDBClient);
/**
 * Search movies.
 */
function *searchMovies():void {
  try {
    const movies = yield call(TMDBClient.search, 'wall-e');
    yield put({ type: MOVIES_CONSTANTS.SEARCH_MOVIES_SUCCESS, payload: movies });
  } catch (error) {
    yield put({ type: MOVIES_CONSTANTS.ERROR });
  }
}

/**
 * Watch fetch repos saga.
 */
export function* watchSearchMovies():void {
  yield* takeEvery(MOVIES_CONSTANTS.SEARCH_MOVIES_REQUEST, searchMovies);
}
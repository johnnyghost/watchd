import { put, call, takeLatest } from 'redux-saga/effects';
import { TMDBClient } from 'core/clients'
import MOVIES_CONSTANTS from 'store/constants/movies';

/**
 * Search movies.
 */
function *searchMovies({payload}):void {
  try {
    const movies = yield call(TMDBClient.search, payload.query);
    yield put({ type: MOVIES_CONSTANTS.SEARCH_MOVIES_SUCCESS, payload: movies });
  } catch (error) {
    yield put({ type: MOVIES_CONSTANTS.ERROR });
  }
}

/**
 * Watch fetch repos saga.
 */
export function* watchSearchMovies():void {
  yield takeLatest(MOVIES_CONSTANTS.SEARCH_MOVIES_REQUEST, searchMovies);
}
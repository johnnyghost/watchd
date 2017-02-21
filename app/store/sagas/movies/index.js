import { fork } from 'redux-saga/effects';
import { watchSearchMovies } from './watchSearchMovies';

/**
 * Movies saga root.
 */
export function* movies():void {
  yield fork(watchSearchMovies);
}
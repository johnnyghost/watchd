import { fork } from 'redux-saga/effects';
import { movies } from './movies/';

export default function* root():void {
  yield fork(movies);
}
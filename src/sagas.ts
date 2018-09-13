import { all, fork } from 'redux-saga/effects';
import example from 'modules/example/saga';
export default function* root() {
  yield all([
    fork(example),
  ]);
}

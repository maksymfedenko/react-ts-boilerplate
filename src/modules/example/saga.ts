import { put, takeLatest, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {
  INCREMENT_COUNTER,
  INCREMENT_COUNTER_ASYNC,
  INCREMENT_COUNTER_ASYNC_SUCCESS,
  INCREMENT_COUNTER_SUCCESS,
  DECREMENT_COUNTER,
  DECREMENT_COUNTER_ASYNC,
  DECREMENT_COUNTER_ASYNC_SUCCESS,
  DECREMENT_COUNTER_SUCCESS,
} from './reducer';

function* incrementCounter() {
  yield put({ type: INCREMENT_COUNTER_SUCCESS });
}

function* incrementCounterAsync() {
  yield delay(1500);
  yield put({ type: INCREMENT_COUNTER_ASYNC_SUCCESS });
}

function* decrementCounter() {
  yield put({ type: DECREMENT_COUNTER_SUCCESS });
}

function* decrementCounterAsync() {
  yield delay(1500);
  yield put({ type: DECREMENT_COUNTER_ASYNC_SUCCESS });
}

function* mySaga() {
  yield takeLatest(INCREMENT_COUNTER, incrementCounter);
  yield takeLatest(INCREMENT_COUNTER_ASYNC, incrementCounterAsync);
  yield takeLatest(DECREMENT_COUNTER, decrementCounter);
  yield takeLatest(DECREMENT_COUNTER_ASYNC, decrementCounterAsync);
}

export default mySaga;

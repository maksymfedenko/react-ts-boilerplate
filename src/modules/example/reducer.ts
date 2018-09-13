import Immutable from 'immutable';
import { handleActions } from 'redux-actions';
import { combineActions } from 'helpers/redux-actions';
import { RESET_STORE } from 'constants/index';

const initialState = Immutable.fromJS({
  counter: 0,
  loading: false,
});

export const INCREMENT_COUNTER = 'example/INCREMENT_COUNTER';
export const [INCREMENT_COUNTER_SUCCESS, INCREMENT_COUNTER_FAILURE] = [
  `${INCREMENT_COUNTER}_SUCCESS`,
  `${INCREMENT_COUNTER}_FAILURE`,
];

export const DECREMENT_COUNTER = 'example/DECREMENT_COUNTER';
export const [DECREMENT_COUNTER_SUCCESS, DECREMENT_COUNTER_FAILURE] = [
  `${DECREMENT_COUNTER}_SUCCESS`,
  `${DECREMENT_COUNTER}_FAILURE`,
];

export const DECREMENT_COUNTER_ASYNC = 'example/DECREMENT_COUNTER_ASYNC';
export const [
  DECREMENT_COUNTER_ASYNC_SUCCESS,
  DECREMENT_COUNTER_ASYNC_FAILURE,
] = [
  `${DECREMENT_COUNTER_ASYNC}_SUCCESS`,
  `${DECREMENT_COUNTER_ASYNC}_FAILURE`,
];

export const INCREMENT_COUNTER_ASYNC = 'example/INCREMENT_COUNTER_ASYNC';
export const [
  INCREMENT_COUNTER_ASYNC_SUCCESS,
  INCREMENT_COUNTER_ASYNC_FAILURE,
] = [
  `${INCREMENT_COUNTER_ASYNC}_SUCCESS`,
  `${INCREMENT_COUNTER_ASYNC}_FAILURE`,
];

export const incrementCounter = (): IAction => ({
  type: INCREMENT_COUNTER,
});

export const decrementCounter = (): IAction => ({
  type: DECREMENT_COUNTER,
});

export const incrementCounterAsync = (): IAction => ({
  type: INCREMENT_COUNTER_ASYNC,
});

export const decrementCounterAsync = (): IAction => ({
  type: DECREMENT_COUNTER_ASYNC,
});

export const resetStore = (): IAction => ({
  type: RESET_STORE,
});

export default handleActions(
  {
    [combineActions(INCREMENT_COUNTER_ASYNC, DECREMENT_COUNTER_ASYNC)]: (
      state
    ) => {
      return state.set('loading', true);
    },

    [combineActions(
      INCREMENT_COUNTER_SUCCESS,
      INCREMENT_COUNTER_ASYNC_SUCCESS
    )]: (state) => {
      return state.set('counter', state.get('counter') + 1);
    },

    [combineActions(
      DECREMENT_COUNTER_SUCCESS,
      DECREMENT_COUNTER_ASYNC_SUCCESS
    )]: (state) => {
      return state.set('counter', state.get('counter') - 1);
    },

    [combineActions(
      DECREMENT_COUNTER_ASYNC_SUCCESS,
      INCREMENT_COUNTER_ASYNC_SUCCESS
    )]: (state) => {
      return state.set('loading', false);
    },

    [RESET_STORE]: () => {
      return initialState;
    },
  },
  initialState
);

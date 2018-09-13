import { createSelector } from 'reselect';

export const counterSelector = createSelector<
  IStore,
  number,
  number
>(
  (state) => state.getIn(['example', 'counter']),
  (counter) => counter
);

export const loadingSelector = createSelector<
  IStore,
  boolean,
  boolean
>(
  (state) => state.getIn(['example', 'loading']),
  (loading) => loading
);

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  incrementCounter,
  incrementCounterAsync,
  decrementCounter,
  decrementCounterAsync,
} from 'modules/example/reducer';
import { counterSelector, loadingSelector } from 'modules/example/selectors';
import Button from 'componentsExamples/common/Button/Button';
import './Counter.scss';

interface IConnectedProps {
  counter: number;
  loading: boolean;
}

interface IConnectedActions {
  incrementCounter(): IAction;
  incrementCounterAsync(): IAction;
  decrementCounter(): IAction;
  decrementCounterAsync(): IAction;
}

class Counter extends PureComponent<IConnectedProps & IConnectedActions> {
  render() {
    const {
      counter,
      loading,
      incrementCounter,
      incrementCounterAsync,
      decrementCounter,
      decrementCounterAsync,
    } = this.props;
    return (
      <section className="counter-section">
        <Button
          className="btn-example"
          disabled={loading}
          onClick={decrementCounterAsync}
        >
          - (with delay)
        </Button>
        <Button
          className="btn-example"
          disabled={loading}
          onClick={decrementCounter}
        >
          -
        </Button>
        <div className="counter">Counter: {counter}</div>
        <Button
          className="btn-example"
          disabled={loading}
          onClick={incrementCounter}
        >
          +
        </Button>
        <Button
          className="btn-example"
          disabled={loading}
          onClick={incrementCounterAsync}
        >
          + (with delay)
        </Button>
      </section>
    );
  }
}

const enhance = connect<IConnectedProps, IConnectedActions>(
  createSelector(counterSelector, loadingSelector, (counter, loading) => ({
    counter,
    loading,
  })),
  {
    decrementCounter,
    decrementCounterAsync,
    incrementCounter,
    incrementCounterAsync,
  }
);

export default enhance(Counter);

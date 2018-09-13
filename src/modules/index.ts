import { combineReducers } from 'redux-immutable';
import example from './example/reducer';

const rootReducer = combineReducers({
  example,
});

export default rootReducer;

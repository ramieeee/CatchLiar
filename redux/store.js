import { createStore, combineReducers } from 'redux';
import reducer from './reducers/reducer';

const rootReducer = combineReducers({
  playInfo: reducer,
});

export const store = createStore(rootReducer);

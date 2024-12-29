import { createStore, combineReducers } from 'redux';
import groupReducer from './group';
import studentReducer from './student';
const rootReducer = combineReducers({
  group: groupReducer,
  student:studentReducer
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

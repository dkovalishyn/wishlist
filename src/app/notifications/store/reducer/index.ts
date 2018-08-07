import { ActionReducerMap, combineReducers } from '@ngrx/store';
import * as fromData from './data';

export interface State {
  resource: fromData.State;
}

const reducers: ActionReducerMap<State> = {
  resource: fromData.reducer,
};

export const reducer = combineReducers(reducers);

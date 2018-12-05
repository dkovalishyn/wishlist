import { Action, ActionReducerMap, combineReducers } from '@ngrx/store';
import * as fromData from './data';
import * as fromRequests from './requests';

export interface State {
  resource: fromData.State;
  requests: fromRequests.State;
}

const reducers: ActionReducerMap<State, Action> = {
  resource: fromData.reducer,
  requests: fromRequests.reducer,
};

export const reducer = combineReducers(reducers);

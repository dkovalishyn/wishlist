import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store';
import { RequestStatus } from '../../../common/types';
import { createRequestReducer } from '../../../common/handlers';
import * as fromGetAll from '../actions/getAll';
import * as fromFollow from '../actions/follow';

export interface State {
  getAll: RequestStatus;
  follow: RequestStatus;
}

const reducers: ActionReducerMap<State> = {
  getAll: createRequestReducer(fromGetAll.actionTypes),
  follow: createRequestReducer(fromFollow.actionTypes),
};

export const reducer: ActionReducer<State> = combineReducers(reducers);

import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store';
import { RequestStatus } from '../../../common/types';
import { createRequestReducer } from '../../../common/handlers';
import * as fromGetAll from '../actions/getAll';
import * as fromFollow from '../actions/follow';
import * as fromGetUserById from '../actions/getUserById';

export interface State {
  getAll: RequestStatus;
  follow: RequestStatus;
  getUserById: RequestStatus;
}

const reducers: ActionReducerMap<State> = {
  getAll: createRequestReducer(fromGetAll.actionTypes),
  follow: createRequestReducer(fromFollow.actionTypes),
  getUserById: createRequestReducer(fromGetUserById.actionTypes),
};

export const reducer: ActionReducer<State> = combineReducers(reducers);

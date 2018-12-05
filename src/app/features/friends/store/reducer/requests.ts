import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store';
import { RequestStatus } from '../../../../shared/utils/types';
import { createRequestReducer } from '../../../../shared/utils/handlers';
import * as fromGetAll from '../actions/getAll';
import * as fromFollow from '../actions/follow';
import * as fromGetUserById from '../actions/getUserById';
import * as fromSearch from '../actions/search';

export interface State {
  getAll: RequestStatus;
  follow: RequestStatus;
  getUserById: RequestStatus;
  search: RequestStatus;
}

const reducers: ActionReducerMap<State> = {
  getAll: createRequestReducer(fromGetAll.actionTypes),
  follow: createRequestReducer(fromFollow.actionTypes),
  getUserById: createRequestReducer(fromGetUserById.actionTypes),
  search: createRequestReducer(fromSearch.actionTypes),
};

export const reducer: ActionReducer<State> = combineReducers(reducers);

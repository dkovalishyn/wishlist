import { Action, ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store';
import { createRequestReducer } from '../../../common/handlers';
import { RequestStatus } from '../../../common/types';
import * as post from '../actions/add';
import * as getAll from '../actions/getAll';

export interface State {
  getAll: RequestStatus;
  post: RequestStatus;
}

const reducers: ActionReducerMap<State, Action> = {
  getAll: createRequestReducer(getAll.actionTypes),
  post: createRequestReducer(post.actionTypes),
};

export const reducer: ActionReducer<State, Action> = combineReducers(reducers);

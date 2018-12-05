import { Action, ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store';
import { createRequestReducer } from '../../../../shared/utils/handlers';
import { RequestStatus } from '../../../../shared/utils/types';
import * as post from '../actions/add';
import * as getAll from '../actions/getAll';
import * as edit from '../actions/edit';
import * as add from '../actions/add';
import * as deleteRequest from '../actions/delete';

export interface State {
  getAll: RequestStatus;
  post: RequestStatus;
  edit: RequestStatus;
  add: RequestStatus;
  delete: RequestStatus;
}

const reducers: ActionReducerMap<State, Action> = {
  getAll: createRequestReducer(getAll.actionTypes),
  post: createRequestReducer(post.actionTypes),
  edit: createRequestReducer(edit.actionTypes),
  add: createRequestReducer(add.actionTypes),
  delete: createRequestReducer(deleteRequest.actionTypes),
};

export const reducer: ActionReducer<State, Action> = combineReducers(reducers);

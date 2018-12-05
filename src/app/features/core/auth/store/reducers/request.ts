import { Action, ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store';
import { defaultRequestStatus, RequestStatus } from '../../../../../shared/utils/types';
import { createRequestReducer } from '../../../../../shared/utils/handlers';
import * as fromLogin from '../actions/login';
import * as fromLogout from '../actions/logout';
import * as fromRegister from '../actions/register';
import * as fromGetUserProfile from '../actions/getUserProfile';

export interface State {
  login: RequestStatus;
  logout: RequestStatus;
  register: RequestStatus;
  getUserProfile: RequestStatus;
}

export const initialState: State = {
  login: defaultRequestStatus,
  logout: defaultRequestStatus,
  register: defaultRequestStatus,
  getUserProfile: defaultRequestStatus,
};

const reducers: ActionReducerMap<State, Action> = {
  login: createRequestReducer(fromLogin.actionTypes),
  logout: createRequestReducer(fromLogout.actionTypes),
  register: createRequestReducer(fromRegister.actionTypes),
  getUserProfile: createRequestReducer(fromGetUserProfile.actionTypes)
};

export const reducer: ActionReducer<State, Action> = combineReducers(reducers);




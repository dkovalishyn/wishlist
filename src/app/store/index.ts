import * as fromAuth from '../core/auth/store';
import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { LOGOUT } from '../core/auth/store/actions';
import {
  convertToDataObject,
  REQUEST_START,
  REQUEST_SUCCESS,
  RequestStart,
  RequestSuccess,
} from '../common/actions';
import * as fromRequestReducer from './requestReducer';

const handleRequest = (state, action) => {
  let field: string;
  let key: string;
  switch (action.type) {
    case (REQUEST_START):
      const requestStartAction = action as RequestStart;

      if (requestStartAction.payload.isDataField) {
        field = requestStartAction.payload.field;

        return {
          ...state,
          [field]: {
            ...state[field],
            entities: [],
            ids: []
          },
        };
      }
      return state;
    case (REQUEST_SUCCESS):
      const requestSuccessAction = action as RequestSuccess;

      if (requestSuccessAction.payload.isDataField) {
        field = requestSuccessAction.payload.field;
        key = requestSuccessAction.payload.key;

        const dataObject = convertToDataObject(key)(requestSuccessAction);
        const dataIds = Object.keys(dataObject);
        return {
          ...state,
          [field]: {
            ...state[field],
            entities: dataObject,
            ids: dataIds
          },
        };
      }
      return state;
    default:
      return state;
  }
};

export interface State {
  auth: fromAuth.State;
  requests: fromRequestReducer.State;
}

export const rootReducer: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  requests: fromRequestReducer.reducer,
};

export const localStorageSyncReducer = (reducer: ActionReducer<State>): ActionReducer<State> => {
  return localStorageSync({ keys: [{ auth: ['user'] }], rehydrate: true })(reducer);
};

export const logoutReducer = (reducer: ActionReducer<State>) => (state: State, action: Action) =>
  reducer(action.type === LOGOUT ? undefined : state, action);

export const requestStatusReducer = (reducer: ActionReducer<State>) => (state: State, action: Action) => {
  return reducer(handleRequest(state, action), action);
};

export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer, logoutReducer, requestStatusReducer];



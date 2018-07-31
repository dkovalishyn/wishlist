import { actionTypes as logout } from '../actions/logout';
import { Action, ActionReducer, MetaReducer } from '@ngrx/store';
import { State } from './rootReducer';
import { localStorageSync } from 'ngrx-store-localstorage';

export const localStorageSyncReducer = (reducer: ActionReducer<State>): ActionReducer<State> => {
  return localStorageSync({
    keys: ['token', 'expiresAt'],
    rehydrate: true,
  })(reducer);
};

export const logoutReducer = (reducer: ActionReducer<State>) => (state: State, action: Action) =>
  reducer(action.type === logout.START ? undefined : state, action);

export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer, logoutReducer];

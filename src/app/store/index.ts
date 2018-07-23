import * as fromAuth from '../core/auth/store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface State {
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
};

export const localStorageSyncReducer = (reducer: ActionReducer<State>): ActionReducer<State> => {
  return localStorageSync({ keys: [{ auth: ['user'] }], rehydrate: true })(reducer);
};

export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer];



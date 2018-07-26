import * as fromAuth from '../core/auth/store';
import * as fromFriends from '../friends/store';
import * as fromWish from '../wish/store';
import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { LOGOUT } from '../core/auth/store/actions';

export interface State {
  auth: fromAuth.State;
  friends: fromFriends.State;
  wish: fromWish.State;
}

export const rootReducer: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  friends: fromFriends.reducer,
  wish: fromWish.reducer,
};

export const localStorageSyncReducer = (reducer: ActionReducer<State>): ActionReducer<State> => {
  return localStorageSync({ keys: [{ auth: ['user'] }], rehydrate: true })(reducer);
};

export const logoutReducer = (reducer: ActionReducer<State>) => (state: State, action: Action) =>
  reducer(action.type === LOGOUT ? undefined : state, action);

export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer, logoutReducer];



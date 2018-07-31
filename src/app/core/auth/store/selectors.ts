import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './reducers/rootReducer';

const getAuth = createFeatureSelector<fromAuth.State>('auth');
export const getUserProfile =  createSelector(
  getAuth,
  (state) => state.profile,
);
export const getExpiresAt = createSelector(
  getAuth,
  (state) => state.expiresAt,
);
export const getToken = createSelector(
  getAuth,
  (state) => state.token,
);

export const getRequestStatus = createSelector(
  getAuth,
  (state) => state.request,
);
export const getLoginState =  createSelector(
  getRequestStatus,
  (state) => state.login.status,
);
export const getLoginError = createSelector(
  getRequestStatus,
  (state) => state.login.error,
);


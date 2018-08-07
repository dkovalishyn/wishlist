import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './reducers/rootReducer';

const getAuth = createFeatureSelector<fromAuth.State>('auth');
export const getUserProfile =  createSelector(
  getAuth,
  (state) => state.profile,
);
export const getUserId = createSelector(
  getUserProfile,
  (state) => state.userId,
);
export const getRefreshToken = createSelector(
  getAuth,
  (state) => state.refreshToken,
);
export const getExpiresIn = createSelector(
  getAuth,
  (state) => state.expiresIn,
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


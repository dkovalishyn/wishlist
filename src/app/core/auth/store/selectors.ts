import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './reducers';
import * as fromRequest from './reducers/request';

export const getAuth = createFeatureSelector<fromAuth.State>('auth');
export const getUser = createSelector(
  getAuth,
  (state) => state.user,
);
export const getUserProfile =  createSelector(
  getUser,
  (state) => state.profile,
);
export const getExpiresAt = createSelector(
  getUser,
  (state) => state.exp,
);
export const getToken = createSelector(
  getUser,
  (state) => state.token,
);

export const getRequestStatus = createSelector(
  getAuth,
  (state) => state.request,
);
export const getIsActive =  createSelector(
  getRequestStatus,
  fromRequest.getIsActive,
);
export const getError = createSelector(
  getRequestStatus,
  fromRequest.getError,
);


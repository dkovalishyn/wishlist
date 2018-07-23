import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './reducers';
import * as fromUser from './reducers/user';
import * as fromRequest from './reducers/request';

export const getAuth = createFeatureSelector<fromAuth.State>('auth');
export const getUser = createSelector(
  getAuth,
  (state) => state.user,
);
export const getUserName =  createSelector(
  getUser,
  fromUser.getUserName,
);
export const getExpiresAt = createSelector(
  getUser,
  fromUser.getExpiresAt,
);
export const getToken = createSelector(
  getUser,
  fromUser.getToken,
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


import * as fromRequest from './request';
import * as fromToken from './token';
import * as fromExpiresAt from './expiresAt';
import * as fromProfile from './profile';
import { ActionReducer, combineReducers } from '@ngrx/store';

export interface State {
  token: fromToken.State;
  expiresAt: fromExpiresAt.State;
  profile: fromProfile.State;
  request: fromRequest.State;
}

export const reducer: ActionReducer<State> = combineReducers({
  token: fromToken.reducer,
  expiresAt: fromExpiresAt.reducer,
  profile: fromProfile.reducer,
  request: fromRequest.reducer
});

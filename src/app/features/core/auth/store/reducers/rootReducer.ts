import * as fromRequest from './request';
import * as fromToken from './token';
import * as fromRefreshToken from './refreshToken';
import * as fromExpiresIn from './expiresIn';
import * as fromProfile from './profile';
import { ActionReducer, combineReducers } from '@ngrx/store';

export interface State {
  token: fromToken.State;
  refreshToken: fromRefreshToken.State;
  expiresIn: fromExpiresIn.State;
  profile: fromProfile.State;
  request: fromRequest.State;
}

export const reducer: ActionReducer<State> = combineReducers({
  token: fromToken.reducer,
  refreshToken: fromRefreshToken.reducer,
  expiresIn: fromExpiresIn.reducer,
  profile: fromProfile.reducer,
  request: fromRequest.reducer
});

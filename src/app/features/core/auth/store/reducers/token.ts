import { Action } from '@ngrx/store';
import * as fromLogin from '../actions/login';
import { LoginSuccess } from '../actions/login';
import * as fromRefreshToken from '../actions/refreshToken';
import * as fromRegister from '../actions/register';

export type State = string;

export const initialState: State = '';

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case fromRefreshToken.actionTypes.START:
      return initialState;
    case fromLogin.actionTypes.SUCCESS:
    case fromRefreshToken.actionTypes.SUCCESS:
    case fromRegister.actionTypes.SUCCESS:
      return (action as LoginSuccess).payload.access_token;
    default:
        return state;
  }
};

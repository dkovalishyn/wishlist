import { Action } from '@ngrx/store';
import * as fromLogin from '../actions/login';
import * as fromRegister from '../actions/register';
import * as fromRefreshToken from '../actions/refreshToken';
import { LoginSuccess } from '../actions/login';
import { RegisterSuccess } from '../actions/register';

export type State = string;

export const initialState: State = '';

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case fromRefreshToken.actionTypes.START:
      return initialState;
    case fromLogin.actionTypes.SUCCESS:
    case fromRegister.actionTypes.SUCCESS:
    case fromRefreshToken.actionTypes.SUCCESS:
      return (action as LoginSuccess | RegisterSuccess).payload.refresh_token;
    default:
      return state;
  }
};





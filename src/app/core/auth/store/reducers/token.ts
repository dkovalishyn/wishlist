import { Action } from '@ngrx/store';
import * as fromLogin from '../actions/login';
import * as fromRegister from '../actions/register';
import { ActionWithPayload } from '../../../../common/types';

export type State = string;

export const initialState: State = '';

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case fromLogin.actionTypes.SUCCESS:
    case fromRegister.actionTypes.SUCCESS:
      return (action as ActionWithPayload).payload.token;
    default:
        return state;
  }
};





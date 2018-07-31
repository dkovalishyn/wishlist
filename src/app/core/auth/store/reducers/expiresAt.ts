import { Action } from '@ngrx/store';
import * as fromLogin from '../actions/login';
import * as fromRegister from '../actions/register';
import { ActionWithPayload } from '../../../../common/types';

export type State = number;

export const initialState: State = 0;

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case fromLogin.actionTypes.SUCCESS:
    case fromRegister.actionTypes.SUCCESS:
      return (action as ActionWithPayload).payload.exp;
    default:
      return state;
  }
};





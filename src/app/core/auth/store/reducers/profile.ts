import { Action } from '@ngrx/store';
import { Person } from '../../../../models/friend';
import * as fromLogin from '../actions/login';
import * as fromLogout from '../actions/logout';
import * as fromRegister from '../actions/register';
import * as fromGetUserProfile from '../actions/getUserProfile';
import { ActionWithPayload } from '../../../../common/types';

export type State = Person;

export const initialState: State = null;

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case fromGetUserProfile.actionTypes.SUCCESS:
      return (action as ActionWithPayload).payload;
    case fromLogin.actionTypes.SUCCESS:
    case fromRegister.actionTypes.SUCCESS:
      return (action as ActionWithPayload).payload.profile;
    case fromLogout.actionTypes.SUCCESS:
      return null;
    default:
      return state;
  }
};





import { Action } from '@ngrx/store';
import { Person } from '../../../../models/Person';
import * as fromGetUserProfile from '../actions/getUserProfile';
import { ActionWithPayload } from '../../../../utils/types';

export type State = Person;

export const initialState: State = null;

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case fromGetUserProfile.actionTypes.SUCCESS:
      return (action as ActionWithPayload).payload;
    default:
      return state;
  }
};





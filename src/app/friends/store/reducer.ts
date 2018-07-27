import { Action } from '@ngrx/store';
import { actionTypes, GetFriendsFailed } from './actions';
import { Friend } from '../../models/friend';
import { normalizeData } from '../../common/handlers';
import { ActionWithPayload } from '../../common/types';

export interface State {
  ids: string[];
  entities: { [key: string]: Friend };
  loading: boolean;
  error: null | Error;
}

const initialState = {
  ids: [],
  entities: {},
  loading: false,
  error: null,
};

export const reducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
      case (actionTypes.GET_FRIENDS):
        return {
          ...state,
          loading: true,
        };
      case (actionTypes.GET_FRIENDS_SUCCESS):
        return {
          ...state,
          ...normalizeData('userId')(action as ActionWithPayload),
          loading: false,
        };
      case (actionTypes.GET_FRIENDS_FAILED):
        return {
          ...state,
          loading: false,
          error: (action as GetFriendsFailed).payload.error
        };
      default:
        return state;
    }
};

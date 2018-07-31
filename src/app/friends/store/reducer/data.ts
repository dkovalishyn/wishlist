import { Action } from '@ngrx/store';
import * as fromGetAll from '../actions/getAll';
import * as fromFollow from '../actions/follow';
import * as fromGetUserById from '../actions/getUserById';
import { Person } from '../../../models/friend';
import { modifyData, normalizeData } from '../../../common/handlers';
import { ActionWithPayload } from '../../../common/types';

export interface State {
  ids: string[];
  entities: { [key: string]: Person };
}

const initialState = {
  ids: [],
  entities: {},
};

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case (fromGetAll.actionTypes.SUCCESS):
      return {
        ...state,
        ...normalizeData('userId')(action as ActionWithPayload),
      };
    case (fromGetUserById.actionTypes.SUCCESS):
    case (fromFollow.actionTypes.SUCCESS):
      return modifyData('userId')(state, action as ActionWithPayload);
    default:
      return state;
  }
};

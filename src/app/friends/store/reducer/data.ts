import { Action } from '@ngrx/store';
import * as fromGetAll from '../actions/getAll';
import * as fromGetUserById from '../actions/getUserById';
import * as fromSearch from '../actions/search';
import { Person } from '../../../models/Person';
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
    case (fromSearch.actionTypes.SUCCESS):
      return {
        ...state,
        ...normalizeData('userId')(action as ActionWithPayload),
      };
    case (fromGetUserById.actionTypes.SUCCESS):
      return modifyData('userId')(state, action as ActionWithPayload);
    default:
      return state;
  }
};

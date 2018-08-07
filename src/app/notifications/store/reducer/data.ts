import { Action } from '@ngrx/store';
import { Notification } from '../../../models/notification';
import { modifyData, normalizeData } from '../../../common/handlers';
import { ActionWithPayload } from '../../../common/types';
import * as fromFollow from '../../../friends/store/actions/follow';
import * as fromGetAll from '../actions/getAll';

export interface State {
  ids: string[];
  entities: { [key: string]: Notification };
}

export const initialState: State = {
  ids: [],
  entities: null,
};

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case (fromGetAll.actionTypes.SUCCESS):
      return {
        ...state,
        ...normalizeData('_id')(action as ActionWithPayload)
      };
    case (fromFollow.actionTypes.SUCCESS):
      return modifyData('_id')(state, action as ActionWithPayload);
    default:
      return state;
  }
};

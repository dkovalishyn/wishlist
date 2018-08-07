import { Action } from '@ngrx/store';
import { Wish } from '../../../models/wish';
import { modifyData, normalizeData } from '../../../common/handlers';
import { ActionWithPayload } from '../../../common/types';
import * as fromGetAll from '../actions/getAll';
import * as fromEdit from '../actions/edit';

export interface State {
  ids: string[];
  entities: { [key: string]: Wish };
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
        ...normalizeData('_id')(action as ActionWithPayload),
      };
    case (fromEdit.actionTypes.SUCCESS):
      return modifyData('_id')(state, action as ActionWithPayload);
    default:
      return state;
  }
};

import { Action } from '@ngrx/store';
import { Wish } from '../../../../models/Wish';
import { deleteItem, modifyData, normalizeData } from '../../../../utils/handlers';
import { ActionWithPayload } from '../../../../utils/types';
import * as fromGetAll from '../actions/getAll';
import * as fromEdit from '../actions/edit';
import * as fromDelete from '../actions/delete';

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
    case (fromDelete.actionTypes.SUCCESS):
      return deleteItem(state, action as ActionWithPayload);
    default:
      return state;
  }
};

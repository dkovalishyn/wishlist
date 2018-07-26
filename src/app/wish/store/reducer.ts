import { Action } from '@ngrx/store';
import { Wish } from '../../models/Wish';
import * as actions from './actions';
import { normalizeData } from '../../common/handlers';
import { GetWishesFailed, GetWishesSuccess } from './actions';

export interface State {
  ids: string[];
  entities: { [key: string]: Wish };
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
    case (actions.GET_WISHES):
      return {
        ...state,
        error: null,
        loading: true,
      };
    case (actions.GET_WISHES_SUCCESS):
      return {
        ...state,
        ...normalizeData('_id')(action as GetWishesSuccess),
        loading: false,
      };
    case (actions.GET_WISHES_FAILED):
      return {
        ...state,
        loading: false,
        error: (action as GetWishesFailed).payload.error,
      };
    default:
      return state;
  }
};

import * as fromCommon from '../common/actions';
import { Action } from '@ngrx/store';

export interface State {
  active: string[];
  errors: { [key: string]: Error | null };
}

export const initialState = {
  active: [],
  errors: null,
};

const removeFromActive = (state: State, action: Action) => state.active.filter(request => request !== action.type);

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case (fromCommon.REQUEST_START):
      return {
        ...state,
        active: [...state.active, action.type],
        errors: { ...state.errors, [action.type]: null },
      };
    case (fromCommon.REQUEST_SUCCESS):
      return {
        ...state,
        active: removeFromActive(state, action),
        errors: { ...state.errors, [action.type]: null }
      };
    case (fromCommon.REQUEST_FAILURE):
      const failureAction = <fromCommon.RequestFailureAction> action;
      return {
        ...state,
        active: removeFromActive(state, action),
        errors: { ...state.errors, [action.type]: failureAction.payload.error}
      };
    default:
      return state;
  }
};


import * as fromCommon from '../common/actions';
import { actions } from '../common';

export interface State {
  active: string[];
  errors: { [key: string]: Error | null };
}

export const initialState = {
  active: [],
  errors: null,
};

const removeFromActive = (state: State, field: string) => state.active.filter(request => request !== field);

export const reducer = (state: State = initialState, action: actions.Action) => {
  switch (action.type) {
    case (fromCommon.REQUEST_START):
      return {
        ...state,
        active: [...state.active, action.payload.field],
        errors: { ...state.errors, [action.payload.field]: null },
      };
    case (fromCommon.REQUEST_SUCCESS):
      return {
        ...state,
        active: removeFromActive(state, action.payload.field),
        errors: { ...state.errors, [action.payload.field]: null }
      };
    case (fromCommon.REQUEST_FAILURE):
      const failureAction = <fromCommon.RequestFailure> action;
      return {
        ...state,
        active: removeFromActive(state, action.payload.field),
        errors: { ...state.errors, [action.payload.field]: failureAction.payload.error}
      };
    default:
      return state;
  }
};


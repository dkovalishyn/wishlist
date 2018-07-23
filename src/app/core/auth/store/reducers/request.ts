import * as actions from '../actions';

export interface State {
  isActive: boolean;
  error: Error | null;
}

export const initialState: State = {
  isActive: false,
  error: null,
};

export const reducer = (state = initialState, action: actions.Action) => {
  switch (action.type) {
    case actions.LOGIN:
    case actions.LOGOUT:
      return {
        ...state,
        isActive: true,
        error: null,
      };
    case actions.LOGIN_SUCCESS:
    case actions.LOGOUT_SUCCESS:
    case actions.REGISTER_SUCCESS:
      return {
        ...state,
        isActive: false,
        error: null,
      };
    case actions.REQUEST_FAILED:
      return {
        ...state,
        isActive: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getIsActive = (state: State) => state.isActive;
export const getError = (state: State) => state.error;




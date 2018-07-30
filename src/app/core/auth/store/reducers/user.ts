import * as actions from '../actions';
import { Friend } from '../../../../models/friend';

export interface State {
  profile: Friend;
  token: string;
  exp: number;
}

export const initialState: State = {
  profile: null,
  token: '',
  exp: 0,
};

export const reducer = (state = initialState, action: actions.Action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
    case actions.REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case actions.LOGOUT:
        return {
          ...state,
          profile: null,
          token: '',
          exp: 0,
        };
    default:
        return state;
  }
};





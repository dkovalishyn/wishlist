import * as actions from '../actions';

export interface State {
  username: string;
  token: string;
  exp: number;
}

export const initialState: State = {
  username: '',
  token: '',
  exp: 0,
};

export const reducer = (state = initialState, action: actions.Action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
    case actions.REGISTER_SUCCESS:
      return {
        ...state,
        exp: action.payload['exp'],
        username: action.payload['username'],
        token: action.payload['token'],
      };
    case actions.LOGOUT:
        return {
          ...state,
          username: '',
          token: '',
          exp: 0,
        };
    default:
        return state;
  }
};

export const getUserName = (state: State) => state.username;
export const getExpiresAt = (state: State) => state.exp;
export const getToken = (state: State) => state.token;




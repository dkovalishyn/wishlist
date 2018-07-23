import { Action } from '@ngrx/store';

export const LOGIN = '[AUTH] LOGIN';
export const LOGOUT = '[AUTH] LOGOUT';
export const REGISTER = '[AUTH] REGISTER';
export const LOGIN_SUCCESS = '[AUTH] LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = '[AUTH] LOGOUT_SUCCESS';
export const REGISTER_SUCCESS = '[AUTH] REGISTER_SUCCESS';
export const REQUEST_FAILED = '[AUTH] REQUEST_FAILED';

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: {
    username: string
    password: string,
  }) {
  }
}

export class Register implements Action {
  readonly type = REGISTER;

  constructor(public payload: {
    username: string
    password: string,
  }) {
  }
}

export class Logout implements Action {
  readonly type = LOGOUT;

  constructor(public payload: null) {
  }
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: {
    exp: number,
    token: string,
    username: string
  }) {
  }
}

export class RegisterSuccess implements Action {
  readonly type = REGISTER_SUCCESS;

  constructor(public payload: {
    exp: number,
    token: string,
    username: string
  }) {
  }
}

export class LogoutSuccess implements Action {
  readonly type = LOGOUT_SUCCESS;

  constructor(public payload: null) { }
}

export class RequestFailed implements Action {
  readonly type = REQUEST_FAILED;

  constructor(public  payload: Error) {}
}

export type Action = Login | Logout | Register | LoginSuccess | LogoutSuccess | RegisterSuccess | RequestFailed;

import { Action } from '@ngrx/store';
import { createRequestActionTypes } from '../../../../utils/actions';
import config from './config.json';
import { AuthResponse } from '../../services/typings';

export const actionTypes = createRequestActionTypes(config.prefix)('LOGIN');

export class Login implements Action {
    readonly type = actionTypes.START;

    constructor(public payload: { username: string, password: string }) {}
}

export class LoginSuccess implements Action {
    readonly type = actionTypes.SUCCESS;

    constructor(public payload: AuthResponse) {}
}

export class LoginFailed implements Action {
    readonly type = actionTypes.FAILED;

    constructor(public payload: Error | null) {}
}

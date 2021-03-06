import { Action } from '@ngrx/store';
import { createRequestActionTypes } from '../../../../../shared/utils/actions';
import config from './config.json';
import { AuthResponse } from '../../services/typings';

export const actionTypes = createRequestActionTypes(config.prefix)('REGISTER');

export class Register implements Action {
    readonly type = actionTypes.START;

    constructor(public payload: { username: string, password: string }) {}
}

export class RegisterSuccess implements Action {
    readonly type = actionTypes.SUCCESS;

    constructor(public payload: AuthResponse) {}
}

export class RegisterFailed implements Action {
    readonly type = actionTypes.FAILED;

    constructor(public payload: Error | null) {}
}

import { Action } from '@ngrx/store';
import { createRequestActionTypes } from '../../../../common/actions';
import config from './config.json';

export const actionTypes = createRequestActionTypes(config.prefix)('LOGIN');

export class Login implements Action {
    readonly type = actionTypes.START;

    constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
    readonly type = actionTypes.SUCCESS;

    constructor(public payload: any) {}
}

export class LoginFailed implements Action {
    readonly type = actionTypes.FAILED;

    constructor(public payload: Error | null) {}
}

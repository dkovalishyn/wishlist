import { Action } from '@ngrx/store';
import { createRequestActionTypes } from '../../../../common/actions';
import config from './config.json';

export const actionTypes = createRequestActionTypes(config.prefix)('LOGOUT');

export class Logout implements Action {
    readonly type = actionTypes.START;

    constructor(public payload: any) {}
}

export class LogoutSuccess implements Action {
    readonly type = actionTypes.SUCCESS;

    constructor(public payload: any) {}
}

export class LogoutFailed implements Action {
    readonly type = actionTypes.FAILED;

    constructor(public payload: Error | null) {}
}

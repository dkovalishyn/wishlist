import { Action } from '@ngrx/store';
import { createRequestActionTypes } from '../../../../common/actions';
import config from './config.json';

export const actionTypes = createRequestActionTypes(config.prefix)('LOGOUT');

export class Logout implements Action {
    readonly type = actionTypes.START;

    constructor() {}
}

export class LogoutSuccess implements Action {
    readonly type = actionTypes.SUCCESS;

    constructor() {}
}

export class LogoutFailed implements Action {
    readonly type = actionTypes.FAILED;

    constructor(public payload: Error | null) {}
}

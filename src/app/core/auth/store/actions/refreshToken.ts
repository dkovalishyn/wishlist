import { Action } from '@ngrx/store';
import { createRequestActionTypes } from '../../../../common/actions';
import { AuthResponse } from '../../services/typings';
import config from './config.json';

export const actionTypes = createRequestActionTypes(config.prefix)('REFRESH_TOKEN');

export class RefreshToken implements Action {
    readonly type = actionTypes.START;

    constructor() {}
}

export class RefreshTokenSuccess implements Action {
    readonly type = actionTypes.SUCCESS;

    constructor(public payload: AuthResponse) {}
}

export class RefreshTokenFailed implements Action {
    readonly type = actionTypes.FAILED;

    constructor(public payload: Error | null) {}
}

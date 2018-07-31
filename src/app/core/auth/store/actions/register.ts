import { Action } from '@ngrx/store';
import { createRequestActionTypes } from '../../../../common/actions';
import config from './config.json';

export const actionTypes = createRequestActionTypes(config.prefix)('REGISTER');

export class Register implements Action {
    readonly type = actionTypes.START;

    constructor(public payload: any) {}
}

export class RegisterSuccess implements Action {
    readonly type = actionTypes.SUCCESS;

    constructor(public payload: any) {}
}

export class RegisterFailed implements Action {
    readonly type = actionTypes.FAILED;

    constructor(public payload: Error | null) {}
}

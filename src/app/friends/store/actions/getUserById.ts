import { Action } from '@ngrx/store';
import { createRequestActionTypes } from '../../../common/actions';
import config from './config.json';

export const actionTypes = createRequestActionTypes(config.prefix)('GET_USER_BY_ID');

export class GetUserById implements Action {
    readonly type = actionTypes.START;

    constructor(public payload: any) {}
}

export class GetUserByIdSuccess implements Action {
    readonly type = actionTypes.SUCCESS;

    constructor(public payload: any) {}
}

export class GetUserByIdFailed implements Action {
    readonly type = actionTypes.FAILED;

    constructor(public payload: Error | null) {}
}

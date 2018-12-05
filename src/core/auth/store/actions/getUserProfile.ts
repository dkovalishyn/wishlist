import { Action } from '@ngrx/store';
import { createRequestActionTypes } from '../../../../utils/actions';
import config from './config.json';

export const actionTypes = createRequestActionTypes(config.prefix)('GET_USER_PROFILE');

export class GetUserProfile implements Action {
    readonly type = actionTypes.START;

    constructor() {}
}

export class GetUserProfileSuccess implements Action {
    readonly type = actionTypes.SUCCESS;

    constructor(public payload: any) {}
}

export class GetUserProfileFailed implements Action {
    readonly type = actionTypes.FAILED;

    constructor(public payload: Error | null) {}
}

import { Action } from '@ngrx/store';
import { createRequestActionTypes } from '../../../../shared/utils/actions';
import config from './config.json';
import { Person } from '../../../../shared/models/Person';

export const actionTypes = createRequestActionTypes(config.prefix)('FOLLOW');

export class Follow implements Action {
    readonly type = actionTypes.START;

    constructor(public payload: {
      userId: string,
      friendId: string,
    }) {}
}

export class FollowSuccess implements Action {
    readonly type = actionTypes.SUCCESS;

    constructor(public payload: Person) {}
}

export class FollowFailed implements Action {
    readonly type = actionTypes.FAILED;

    constructor(public payload: Error | null) {}
}

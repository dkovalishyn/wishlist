import { Action } from '@ngrx/store';
import { createRequestActionTypes } from '../../../../shared/utils/actions';
import config from './config.json';

export const actionTypes = createRequestActionTypes(config.prefix)('REORDER');

export class Reorder implements Action {
    readonly type = actionTypes.START;

    constructor(public payload: {
      prevOrder: number,
      nextOrder: number
    }) {}
}

export class ReorderSuccess implements Action {
    readonly type = actionTypes.SUCCESS;

    constructor() {}
}

export class ReorderFailed implements Action {
    readonly type = actionTypes.FAILED;

    constructor(public payload: Error | null) {}
}

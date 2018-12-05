import { Action } from '@ngrx/store';
import { createRequestActionTypes } from '../../../../shared/utils/actions';
import config from './config.json';
import { Person } from '../../../../shared/models/Person';

export const actionTypes = createRequestActionTypes(config.prefix)('SEARCH');

export class Search implements Action {
    readonly type = actionTypes.START;

    constructor(public payload: { fullName?: string }) {}
}

export class SearchSuccess implements Action {
    readonly type = actionTypes.SUCCESS;

    constructor(public payload: Person[]) {}
}

export class SearchFailed implements Action {
    readonly type = actionTypes.FAILED;

    constructor(public payload: Error | null) {}
}

import { Action } from '@ngrx/store';
import { Wish } from '../../../models/wish';
import { createRequestActionTypes } from '../../../common/actions';
import config from './config.json';

export const actionTypes = createRequestActionTypes(config.prefix)('GET_WISHES');

export class GetWishes implements Action {
    readonly type = actionTypes.START;

    constructor() {}
}

export class GetWishesSuccess implements Action {
    readonly type = actionTypes.SUCCESS;

    constructor(public payload: Wish[]) {}
}

export class GetWishesFailed implements Action {
    readonly type = actionTypes.FAILED;

    constructor(public payload: Error | null) {}
}

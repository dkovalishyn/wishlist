import { Action } from '@ngrx/store';
import config from './config.json';
import { Wish } from '../../../../shared/models/Wish';
import { createRequestActionTypes } from '../../../../shared/utils/actions';

export const actionTypes = createRequestActionTypes(config.prefix)('ADD_WISH');

export class AddWish implements Action {
    readonly type = actionTypes.START;

    constructor(public payload: Wish) {}
}

export class AddWishSuccess implements Action {
    readonly type = actionTypes.SUCCESS;

    constructor(public payload: Wish) {}
}

export class AddWishFailed implements Action {
    readonly type = actionTypes.FAILED;

    constructor(public payload: Error | null) {}
}



import { Action } from '@ngrx/store';
import { prefix } from './config';
import { Wish } from '../../../models/wish';
import { createRequestActionTypes } from '../../../common/actions';

export const actionTypes = createRequestActionTypes(prefix)('ADD_WISH');

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



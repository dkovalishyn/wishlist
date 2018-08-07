import { Action } from '@ngrx/store';
import { createRequestActionTypes } from '../../../common/actions';
import config from './config.json';
import { Wish } from '../../../models/wish';

export const actionTypes = createRequestActionTypes(config.prefix)('EDIT_WISH');

export class EditWish implements Action {
    readonly type = actionTypes.START;

    constructor(public payload: Wish) {}
}

export class EditWishSuccess implements Action {
    readonly type = actionTypes.SUCCESS;

    constructor(public payload: any) {}
}

export class EditWishFailed implements Action {
    readonly type = actionTypes.FAILED;

    constructor(public payload: Error | null) {}
}

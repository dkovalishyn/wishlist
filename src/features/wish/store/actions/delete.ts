import { Action } from '@ngrx/store';
import { createRequestActionTypes } from '../../../../utils/actions';
import config from './config.json';

export const actionTypes = createRequestActionTypes(config.prefix)('DELETE_WISH');

export class DeleteWish implements Action {
  readonly type = actionTypes.START;

  constructor(public payload: any) {
  }
}

export class DeleteWishSuccess implements Action {
  readonly type = actionTypes.SUCCESS;

  constructor(public payload: any) {
  }
}

export class DeleteWishFailed implements Action {
  readonly type = actionTypes.FAILED;

  constructor(public payload: Error | null) {
  }
}

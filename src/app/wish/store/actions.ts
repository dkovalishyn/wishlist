import { Action } from '@ngrx/store';
import { getActionName } from '../../common/actions';
import { Wish } from '../../models/wish';

const prefix = 'WISHES';
const withPrefix = getActionName(prefix);

export enum dataFields {
  wish = 'wish',
}

export const GET_WISHES = withPrefix('GET_WISHES');
export const GET_WISHES_SUCCESS = withPrefix('GET_WISHES_SUCCESS');
export const GET_WISHES_FAILED = withPrefix('GET_WISHES_FAILED');
export const GET_WISH_BY_ID = withPrefix('GET_WISH_BY_ID');
export const ADD_WISH = withPrefix('ADD_WISH');
export const DELETE_WISH = withPrefix('DELETE_WISH');
export const UPDATE_WISH = withPrefix('UPDATE_WISH');

export class GetWishes implements Action {
  readonly type = GET_WISHES;
}

export class GetWishesSuccess implements Action {
  readonly type = GET_WISHES_SUCCESS;

  constructor(public payload: { data: Wish[] }) {}
}

export class GetWishesFailed implements Action {
  readonly type = GET_WISHES_FAILED;

  constructor(public payload: { error: Error | null }) {}
}

export class GetWishById implements Action {
  readonly type = GET_WISH_BY_ID;

  constructor(public payload: { id: string }) {}
}

export class AddWish implements Action {
  readonly type = ADD_WISH;

  constructor(public payload: { wish: Wish }) {}
}

export class DeleteWish implements Action {
  readonly type = DELETE_WISH;

  constructor(public payload: { id: string }) {}
}

export class UpdateWish implements Action {
  readonly type = UPDATE_WISH;

  constructor(public payload: { id: string, wish: Wish }) {}
}

export type Action = GetWishes | AddWish | DeleteWish | UpdateWish;

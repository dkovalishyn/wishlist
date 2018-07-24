import { Action } from '@ngrx/store';
import { getActionName } from '../../common/actions';

const prefix = 'FRIENDS';
const withPrefix = getActionName(prefix);

export enum dataFields {
  friends = 'friends',
}

export const GET_FRIENDS = withPrefix('GET_FRIENDS');
export const FOLLOW = withPrefix('FOLLOW');

export class GetFriends implements Action {
  readonly type = GET_FRIENDS;

  constructor() {}
}

export type Action = GetFriends;

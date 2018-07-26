import { Action } from '@ngrx/store';
import { Friend } from '../../models/friend';

export enum actionTypes {
 GET_FRIENDS = '[FRIENDS] GET_ALL',
 GET_FRIENDS_SUCCESS = '[FRIENDS] GET_ALL_SUCCESS',
 GET_FRIENDS_FAILED = '[FRIENDS] GET_ALL_FAILED',
 FOLLOW = '[FRIENDS] FOLLOW',
}

export class GetFriends implements Action {
  readonly type = actionTypes.GET_FRIENDS;

  constructor() {}
}

export class GetFriendsSuccess implements Action {
  readonly type = actionTypes.GET_FRIENDS_SUCCESS;

  constructor(public payload: { data: Friend[] }) {}
}

export class GetFriendsFailed implements Action {
  readonly type = actionTypes.GET_FRIENDS_FAILED;

  constructor(public payload: { error: null | Error }) {}
}

import { createRequestActionTypes } from '../../../common/actions';
import { Action } from '@ngrx/store';
import { Friend } from '../../../models/friend';

export const actionTypes = createRequestActionTypes('FRIENDS')('GET_ALL');

export class GetFriends implements Action {
  readonly type = actionTypes.START;

  constructor() {
  }
}

export class GetFriendsSuccess implements Action {
  readonly type = actionTypes.SUCCESS;

  constructor(public payload: Friend[]) {
  }
}

export class GetFriendsFailed implements Action {
  readonly type = actionTypes.FAILED;

  constructor(public payload:  null | Error) {
  }
}

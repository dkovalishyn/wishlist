import { createRequestActionTypes } from '../../../../shared/utils/actions';
import { Action } from '@ngrx/store';
import { Person } from '../../../../shared/models/Person';

export const actionTypes = createRequestActionTypes('FRIENDS')('GET_ALL');

export class GetFriends implements Action {
  readonly type = actionTypes.START;

  constructor() {
  }
}

export class GetFriendsSuccess implements Action {
  readonly type = actionTypes.SUCCESS;

  constructor(public payload: Person[]) {
  }
}

export class GetFriendsFailed implements Action {
  readonly type = actionTypes.FAILED;

  constructor(public payload:  null | Error) {
  }
}

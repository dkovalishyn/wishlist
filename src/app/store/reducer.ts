import * as fromAuth from '../core/auth/store';
import * as fromFriends from '../friends/store';
import * as fromWish from '../wish/store';

export interface State {
  auth: fromAuth.State;
  friends: fromFriends.State;
  wish: fromWish.State;
}

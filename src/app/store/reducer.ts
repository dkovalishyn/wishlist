import * as fromAuth from '../../core/auth/store';
import * as fromFriends from '../../features/friends/store';
import * as fromWish from '../../features/wish/store';

export interface State {
  auth: fromAuth.State;
  friends: fromFriends.State;
  wish: fromWish.State;
}

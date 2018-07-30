import { Component, Input } from '@angular/core';
import { Friend } from '../../../models/friend';
import { Follow } from '../../store/actions/follow';
import { State } from '../../../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.scss']
})
export class FriendCardComponent {
  @Input() friend: Friend;
  @Input() userId: string;

  constructor(
    private store: Store<State>,
  ) { }

  follow() {
    this.store.dispatch(new Follow({ userId: this.userId, friendId: this.friend.userId}));
  }
}

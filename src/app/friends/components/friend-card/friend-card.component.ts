import { Component, Input } from '@angular/core';
import { Person } from '../../../models/friend';
import { Follow } from '../../store/actions/follow';
import { Store } from '@ngrx/store';
import { State } from '../../../store/reducer';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.scss']
})
export class FriendCardComponent {
  @Input() friend: Person;
  @Input() userId: string;

  constructor(
    private store: Store<State>,
  ) { }

  follow() {
    this.store.dispatch(new Follow({ userId: this.userId, friendId: this.friend.userId}));
  }
}

import { Component, Input } from '@angular/core';
import { Friend } from '../../../models/friend';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.scss']
})
export class FriendCardComponent {
  @Input() friend: Friend;

  constructor() { }

  follow() {

  }
}

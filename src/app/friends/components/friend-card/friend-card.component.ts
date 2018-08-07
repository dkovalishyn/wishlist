import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../../models/Person';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.scss']
})
export class FriendCardComponent {
  @Input() friend: Person;
  @Input() profile: Person;
  @Output() follow = new EventEmitter<{ userId: string, friendId: string}>();

  constructor() { }

  canFollow(friendId: string): boolean {
    return !this.profile.following.includes(friendId);
  }
}

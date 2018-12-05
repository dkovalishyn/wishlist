import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../../../models/Person';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import '../../../../assets/defaultAvatar.svg';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.scss']
})
export class FriendCardComponent {
  @Input() friend: Person;
  @Input() profile: Person;
  @Output() follow = new EventEmitter<{ userId: string, friendId: string}>();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('defaultAvatar',
      sanitizer.bypassSecurityTrustResourceUrl('assets/defaultAvatar.svg'));
  }

  canFollow(friendId: string): boolean {
    return !this.profile.following.includes(friendId);
  }

  getAvatarPath(): string {
    return this.profile.avatar || 'assets/defaultAvatar.svg';
  }
}

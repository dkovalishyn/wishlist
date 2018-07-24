import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsService } from './services/friends.service';
import { FriendCardComponent } from './components/friend-card/friend-card.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MatCardModule } from '@angular/material';
import { EffectsModule } from '@ngrx/effects';
import { reducer, FriendsEffects } from './store';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    FriendsRoutingModule,
    MatCardModule,
    EffectsModule.forFeature([FriendsEffects]),
    StoreModule.forFeature('friends', reducer),
  ],
  declarations: [FriendsListComponent, FriendCardComponent, ProfileComponent],
  providers: [FriendsService],
})
export class FriendsModule { }

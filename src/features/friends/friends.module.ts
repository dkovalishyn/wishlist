import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsListComponent } from './containers/friends-list/friends-list.component';
import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsService } from './services/friends.service';
import { FriendCardComponent } from './components/friend-card/friend-card.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MatFormFieldModule, MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatInputModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { EffectsModule } from '@ngrx/effects';
import { reducer, FriendsEffects } from './store';
import { StoreModule } from '@ngrx/store';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { DynamicFormsModule } from '../../common/forms/dynamic-forms.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FriendsRoutingModule,
    DynamicFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([FriendsEffects]),
    StoreModule.forFeature('friends', reducer),
  ],
  declarations: [FriendsListComponent, FriendCardComponent, ProfileComponent, ProfileEditComponent, SearchBarComponent],
  providers: [FriendsService],
})
export class FriendsModule { }

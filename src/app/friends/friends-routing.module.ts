import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FriendsListComponent } from './containers/friends-list/friends-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';

const friendsRoutes = [
  { path: 'friends', component: FriendsListComponent },
  { path: 'user/:id', component: ProfileComponent },
  { path: 'user/:id/edit', component: ProfileEditComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(friendsRoutes),
  ],
  declarations: [],
  exports: [RouterModule],
})
export class FriendsRoutingModule { }

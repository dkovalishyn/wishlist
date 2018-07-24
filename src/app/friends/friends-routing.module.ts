import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { ProfileComponent } from './components/profile/profile.component';

const friendsRoutes = [
  { path: 'friends', component: FriendsListComponent },
  { path: 'user/:id', component: ProfileComponent },
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

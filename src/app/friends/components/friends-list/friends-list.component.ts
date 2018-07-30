import { Component, OnInit } from '@angular/core';
import { Friend } from '../../../models/friend';
import { State } from '../../../store';
import { Store } from '@ngrx/store';
import { selectors } from '../../store';
import { getUserProfile } from '../../../core/auth/store/selectors';
import { GetFriends } from '../../store/actions/getAll';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {
  list: Friend[];
  userId: string;

  constructor(
    private store: Store<State>,
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetFriends());

    this.store.select(selectors.getAllFriends).subscribe(list => this.list = list);
    this.store.select(getUserProfile).subscribe((user) => {
      console.log(user);
      this.userId = user ? user.userId : null;
    });
  }

}

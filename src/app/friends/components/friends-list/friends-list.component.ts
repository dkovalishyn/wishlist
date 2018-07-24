import { Component, OnInit } from '@angular/core';
import { Friend } from '../../../models/friend';
import { State } from '../../../store';
import { Store } from '@ngrx/store';
import { GetFriends } from '../../store/actions';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {
  list: Friend[] = [];

  constructor(
    private store: Store<State>,
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetFriends());
  }

}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Person } from '../../../models/friend';
import { selectors } from '../../store';
import { getUserProfile } from '../../../core/auth/store/selectors';
import { GetFriends } from '../../store/actions/getAll';
import { State } from '../../../store/reducer';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {
  list: Person[];
  userId: string;

  constructor(
    private store: Store<State>,
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetFriends());

    this.store.select(selectors.getAllFriends).subscribe(list => this.list = list);
    this.store.select(getUserProfile).subscribe(({ userId }) => this.userId = userId);
  }

}

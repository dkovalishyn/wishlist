import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Person } from '../../../../models/Person';
import { selectors } from '../../store';
import { getUserProfile } from '../../../../core/auth/store/selectors';
import { GetFriends } from '../../store/actions/getAll';
import { State } from '../../../../app/store/reducer';
import { Follow } from '../../store/actions/follow';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {
  list$: Observable<Person[]>;
  profile$: Observable<Person>;

  constructor(
    private store: Store<State>,
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetFriends());

    this.list$ = this.store.select(selectors.getAllFriends);
    this.profile$ = this.store.select(getUserProfile);
  }

  follow(payload: { userId: string, friendId: string }) {
    this.store.dispatch(new Follow(payload));
  }
}

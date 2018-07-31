import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../../auth/services/user.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Logout } from '../../../auth/store/actions/logout';
import { State } from '../../../../store/reducer';
import { Person } from '../../../../models/friend';
import { getUserProfile } from '../../../auth/store/selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideNav = new EventEmitter<void>();
  user: Person;

  constructor(public auth: UserService, private router: Router, private store: Store<State>) {
    this.store.select(getUserProfile).subscribe(user => this.user = user);
  }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new Logout(null));
  }

  onSideNavToggle() {
    this.toggleSideNav.emit();
  }
}

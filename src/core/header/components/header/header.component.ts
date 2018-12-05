import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../../auth/services/user.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Logout } from '../../../auth/store/actions/logout';
import { State } from '../../../../app/store/reducer';
import { Person } from '../../../../models/Person';
import { getUserProfile } from '../../../auth/store/selectors';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideNav = new EventEmitter<void>();
  user$: Observable<Person>;

  constructor(public auth: UserService, private router: Router, private store: Store<State>) {
    this.user$ = this.store.select(getUserProfile);
  }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new Logout());
  }

  onSideNavToggle() {
    this.toggleSideNav.emit();
  }
}

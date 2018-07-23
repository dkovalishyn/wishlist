import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../auth/services/user.service';
import { Router } from '@angular/router';
import { State } from '../../../store';
import { Store } from '@ngrx/store';
import { Logout } from '../../auth/store/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideNav = new EventEmitter<void>();

  constructor(public auth: UserService, private router: Router, private store: Store<State>) {
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

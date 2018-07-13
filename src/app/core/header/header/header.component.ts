import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../auth/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideNav = new EventEmitter<void>();

  constructor(public auth: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

  onSideNavToggle() {
    this.toggleSideNav.emit();
  }
}

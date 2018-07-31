import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../../store/reducer';
import { Person } from '../../../../models/friend';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent implements OnInit {
  @Output() logout = new EventEmitter();
  @Input() user: Person;

  constructor() { }

  ngOnInit() {
  }

}

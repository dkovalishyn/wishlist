import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../../../models/Person';

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

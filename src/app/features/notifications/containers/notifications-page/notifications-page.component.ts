import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllNotifications } from '../../store/selectors';
import { Observable } from 'rxjs/Observable';
import { State } from '../../../../store/reducer';
import { Notification } from '../../../../shared/models/Notification';
import { GetAllNotifications } from '../../store/actions/getAll';

@Component({
  selector: 'app-notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.scss']
})
export class NotificationsPageComponent implements OnInit {
  notifications$: Observable<Notification[]>;

  constructor(
    private store: Store<State>,
  ) {
    this.store.dispatch(new GetAllNotifications());
    this.notifications$ = this.store.select(getAllNotifications);
  }

  ngOnInit() {
  }

}

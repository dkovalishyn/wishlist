import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/Observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';
import { actionTypes as getAll, GetAllNotificationsFailed, GetAllNotificationsSuccess } from './actions/getAll';
import { NotificationsService } from '../services/notifications.service';

@Injectable()
export class NotificationsEffects {
  constructor(
    private actions$: Actions,
    private notificationsService: NotificationsService,
  ) {
  }

  @Effect()
  getFriends$ = this.actions$.pipe(
    ofType(getAll.START),
    switchMap(() => this.notificationsService.getAllNotifications()
      .pipe(
        map(data => new GetAllNotificationsSuccess(data),
          catchError((error) => of(new GetAllNotificationsFailed(error)))
        )
      ),
    ),
  );
}

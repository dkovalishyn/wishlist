import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as actions from './actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { FriendsService } from '../services/friends.service';
import { of } from 'rxjs/observable/of';
import { dataFields } from './actions';
import { RequestFailure, RequestStart, RequestSuccess } from '../../common/actions';
import { Friend } from '../../models/friend';
import { State } from '../../store';
import { Store } from '@ngrx/store';

@Injectable()
export class FriendsEffects {
  prefix = 'FRIENDS';

  constructor(
    private actions$: Actions,
    private friendsService: FriendsService,
    private store: Store<State>,
  ) {
  }

  @Effect()
  getFriends$ = this.actions$.pipe(
    ofType(actions.GET_FRIENDS),
    map(() => this.store.dispatch((new RequestStart({ field: dataFields.friends, isDataField: true })))),
    switchMap(() => this.friendsService.getFriends()
        .pipe(
          map((data: Friend[]) => new RequestSuccess({ data, key: 'userId', field: dataFields.friends, isDataField: true }),
            catchError((error) => of(new RequestFailure({ field: dataFields.friends, error }))))
      ),
    ),
  );
}

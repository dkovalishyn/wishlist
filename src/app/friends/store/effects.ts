import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as actions from './actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { FriendsService } from '../services/friends.service';
import { requestStart, requestSuccess, requestFailure } from '../../common/actions';
import { of } from 'rxjs/observable/of';
import { dataFields } from './actions';

@Injectable()
export class FriendsEffects {
  prefix = 'FRIENDS';

  constructor(
    private actions$: Actions,
    private friendsService: FriendsService,
  ) {
  }

  @Effect()
  getFriends$ = this.actions$.pipe(
    ofType(actions.GET_FRIENDS),
    // TODO: REQUEST STARTED ACTION needs to be fire up
    switchMap(() => this.friendsService.getFriends()
      .pipe(
        map((data) => requestSuccess(this.prefix)({ data, key: 'userId', field: dataFields.friends })),
        catchError((error) => of(requestFailure(this.prefix)({ error })))
      )
    )
  );
}

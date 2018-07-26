import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/Observable/of';
import { actionTypes } from './actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { FriendsService } from '../services/friends.service';
import { GetFriendsFailed, GetFriendsSuccess } from './actions';
import { Friend } from '../../models/friend';

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
    ofType(actionTypes.GET_FRIENDS),
    switchMap(() => this.friendsService.getFriends()
        .pipe(
          map((data: Friend[]) => new GetFriendsSuccess({ data }),
            catchError((error) => of(new GetFriendsFailed({ error })))
          )
      ),
    ),
  );
}

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/Observable/of';
import { actionTypes as getAll, GetFriendsFailed, GetFriendsSuccess } from './actions/getAll';
import { actionTypes as follow, FollowFailed, FollowSuccess } from './actions/follow';
import { catchError, map, switchMap } from 'rxjs/operators';
import { FriendsService } from '../services/friends.service';
import { Friend } from '../../models/friend';
import { ActionWithPayload } from '../../common/types';

@Injectable()
export class FriendsEffects {
  constructor(
    private actions$: Actions,
    private friendsService: FriendsService,
  ) {
  }

  @Effect()
  getFriends$ = this.actions$.pipe(
    ofType(getAll.START),
    switchMap(() => this.friendsService.getFriends()
        .pipe(
          map((data: Friend[]) => new GetFriendsSuccess(data),
            catchError((error) => of(new GetFriendsFailed(error)))
          )
      ),
    ),
  );

  @Effect()
  follow$ = this.actions$.pipe(
    ofType(follow.START),
    switchMap((action: ActionWithPayload) => this.friendsService.follow(action.payload)
      .pipe(
        map((data: Friend) => new FollowSuccess(data),
          catchError((error) => of(new FollowFailed(error)))
        )
      ),
    ),
  );
}

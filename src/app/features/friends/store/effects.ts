import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/Observable/of';
import { actionTypes as getAll, GetFriendsFailed, GetFriendsSuccess } from './actions/getAll';
import { actionTypes as follow, FollowFailed, FollowSuccess } from './actions/follow';
import { actionTypes as getUserById, GetUserByIdFailed, GetUserByIdSuccess } from './actions/getUserById';
import { actionTypes as search, SearchFailed, SearchSuccess } from './actions/search';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { FriendsService } from '../services/friends.service';
import { Person } from 'shared/models/Person';
import { ActionWithPayload } from 'shared/utils/types';

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
          map((data: Person[]) => new GetFriendsSuccess(data),
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
        map((data: Person) => new FollowSuccess(data),
          catchError((error) => of(new FollowFailed(error)))
        )
      ),
    ),
  );

  @Effect()
  getUserById$ = this.actions$.pipe(
    ofType(getUserById.START),
    mergeMap((action: ActionWithPayload) => this.friendsService.getUserById(action.payload)
      .pipe(
        map((data: Person) => new GetUserByIdSuccess(data),
          catchError((error) => of(new GetUserByIdFailed(error)))
        )
      )
    )
  );

  @Effect()
  search$ = this.actions$.pipe(
    ofType(search.START),
    mergeMap((action: ActionWithPayload) => this.friendsService.search(action.payload)
      .pipe(
        map((data: Person[]) => new SearchSuccess(data),
          catchError((error) => of(new SearchFailed(error)))
        )
      )
    )
  );
}

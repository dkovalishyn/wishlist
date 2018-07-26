import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as actions from './actions';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { dataFields, GetWishesFailed, GetWishesSuccess } from './actions';
import { RequestFailure, RequestStart, RequestSuccess } from '../../common/actions';
import { State } from '../../store';
import { Store } from '@ngrx/store';
import { WishService } from '../services/wish.service';
import { Wish } from '../../models/wish';

@Injectable()
export class WishEffects {
  prefix = 'FRIENDS';

  constructor(
    private actions$: Actions,
    private wishService: WishService,
    private store: Store<State>,
  ) {
  }

  @Effect()
  getWishes$ = this.actions$.pipe(
    ofType(actions.GET_WISHES),
    switchMap(() => this.wishService.getWishes()
      .pipe(
        map((data: Wish[]) => new GetWishesSuccess({ data }),
          catchError((error) => of(new GetWishesFailed({ error }))))
      ),
    ),
  );

  @Effect()
  getWishById$ = this.actions$.pipe(
    ofType(actions.GET_WISH_BY_ID),
    withLatestFrom(this.store),
    map((data) => ({ type: 'RESULT', payload: data})),
  );
}

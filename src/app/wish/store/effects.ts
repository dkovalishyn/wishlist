import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/Observable/of';
import { WishService } from '../services/wish.service';
import { Wish } from '../../models/wish';
import * as fromGetAll from './actions/getAll';
import * as fromAdd from './actions/add';
import { ActionWithPayload } from '../../common/types';

@Injectable()
export class WishEffects {
  constructor(
    private actions$: Actions,
    private wishService: WishService,
  ) {
  }

  @Effect()
  getWishes$ = this.actions$.pipe(
    ofType(fromGetAll.actionTypes.START),
    switchMap(() => this.wishService.getWishes()
      .pipe(
        map((data: Wish[]) => new fromGetAll.GetWishesSuccess(data),
          catchError((error) => of(new fromGetAll.GetWishesFailed(error))))
      ),
    ),
  );

  @Effect()
  addWish$ = this.actions$.pipe(
    ofType(fromAdd.actionTypes.START),
    switchMap((action: ActionWithPayload) => this.wishService.addWish(action.payload)
      .pipe(
        map((data: Wish) => new fromAdd.AddWishSuccess(data),
          catchError((error) => of(new fromAdd.AddWishFailed(error))))
      ),
    ),
  );
}

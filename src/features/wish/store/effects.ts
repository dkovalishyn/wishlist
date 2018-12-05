import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs/Observable/of';
import { WishService } from '../services/wish.service';
import { Wish } from '../../../models/Wish';
import * as fromGetAll from './actions/getAll';
import * as fromAdd from './actions/add';
import * as fromEdit from './actions/edit';
import * as fromDelete from './actions/delete';
import { ActionWithPayload } from '../../../utils/types';
import { MessageService } from '../../../core/log/services/message.service';

@Injectable()
export class WishEffects {
  constructor(
    private actions$: Actions,
    private wishService: WishService,
    private messageService: MessageService,
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
    mergeMap((action: ActionWithPayload) => this.wishService.addWish(action.payload).pipe(
      map(data => {
          this.messageService.add(`New wish added: ${data.title}`);
          return new fromAdd.AddWishSuccess(data);
      }),
      catchError((error) => of(new fromAdd.AddWishFailed(error)))
      ),
    ),
  );

  @Effect()
  editWish$ = this.actions$.pipe(
    ofType(fromEdit.actionTypes.START),
    switchMap((action) => this.wishService.updateWish((action as ActionWithPayload).payload)
      .pipe(
        map((data: Wish[]) => new fromEdit.EditWishSuccess(data),
          catchError((error) => of(new fromEdit.EditWishFailed(error))))
      ),
    ),
  );


  @Effect()
  deleteWish$ = this.actions$.pipe(
    ofType(fromDelete.actionTypes.START),
    switchMap((action) => this.wishService.deleteWish((action as ActionWithPayload).payload)
      .pipe(
        map((data: Wish) => new fromDelete.DeleteWishSuccess(data),
          catchError((error) => of(new fromDelete.DeleteWishFailed(error))))
      ),
    ),
  );
}

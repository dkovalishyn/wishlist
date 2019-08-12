import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs/Observable/of';
import { WishService } from '../services/wish.service';
import { Wish } from 'shared/models/Wish';
import * as fromGetAll from './actions/getAll';
import * as fromAdd from './actions/add';
import * as fromEdit from './actions/edit';
import * as fromDelete from './actions/delete';
import * as fromReorder from './actions/reorder';
import { ActionWithPayload } from 'shared/utils/types';
import { MessageService } from '../../core/log/services/message.service';

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
    mergeMap(() => this.wishService.getWishes()
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
    mergeMap((action) => {
        console.log(action);
        return this.wishService.updateWish((action as ActionWithPayload).payload).pipe(
          map((data: Wish[]) => new fromEdit.EditWishSuccess(data),
            catchError((error) => of(new fromEdit.EditWishFailed(error))))
        );
      }
    ),
  );


  @Effect()
  deleteWish$ = this.actions$.pipe(
    ofType(fromDelete.actionTypes.START),
    mergeMap((action) => this.wishService.deleteWish((action as ActionWithPayload).payload)
      .pipe(
        map((data: Wish) => new fromDelete.DeleteWishSuccess(data),
          catchError((error) => of(new fromDelete.DeleteWishFailed(error)))),
      ),
    )
  );

  @Effect()
  reorderWishes$ = this.actions$.pipe(
    ofType(fromReorder.actionTypes.START),
    mergeMap((action) => this.wishService.reorderWishes((action as ActionWithPayload).payload)
      .pipe(
        map(() => new fromReorder.ReorderSuccess(),
          catchError((error) => of(new fromReorder.ReorderFailed(error)))),
      ),
    )
  );

  @Effect()
  updateWishes$ = this.actions$.pipe(
    filter(({ type }) => [
      fromDelete.actionTypes.SUCCESS,
      fromEdit.actionTypes.SUCCESS,
      fromAdd.actionTypes.SUCCESS
    ].includes(type)),
    map(() => new fromGetAll.GetWishes())
  );
}

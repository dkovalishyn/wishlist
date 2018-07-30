import { switchMap } from 'rxjs/operators';
import { INIT } from './actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { GetWishes } from '../wish/store/actions/getAll';

@Injectable()
export class FriendsEffects {
  constructor(
    private actions$: Actions,
  ) {
  }

  @Effect()
  init$ = this.actions$.pipe(
    ofType(INIT),
    switchMap(() => [
      new GetWishes(),
    ])
  );
}

import { switchMap } from 'rxjs/operators';
import { INIT } from './actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { GetWishes } from '../wish/store/actions/getAll';
import { GetUserProfile } from '../core/auth/store/actions/getUserProfile';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
  ) {
  }

  @Effect()
  init$ = this.actions$.pipe(
    ofType(INIT),
    switchMap(() => [
      new GetWishes(),
      new GetUserProfile(),
    ])
  );
}

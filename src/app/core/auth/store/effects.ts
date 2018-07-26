import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { UserService } from '../services/user.service';
import * as actions from './actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions,
              private userService: UserService) {
  }

  @Effect()
  login$ = this.actions$.pipe(
    ofType(actions.LOGIN),
    mergeMap((action: actions.Action) => this.userService.login(action.payload).pipe(
      map((data) => new actions.LoginSuccess(data)),
      catchError(error => of(new actions.RequestFailed(error))),
    )),
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(actions.LOGOUT),
    mergeMap(() => this.userService.logout().pipe(
      map(() => new actions.LogoutSuccess(null)),
      catchError(error => of(new actions.RequestFailed(error))),
    )),
  );

  @Effect()
  register$ = this.actions$.pipe(
    ofType(actions.REGISTER),
    mergeMap((action: actions.Action) => this.userService.register(action.payload).pipe(
      map((data) => new actions.RegisterSuccess(data)),
      catchError(error => of(new actions.RequestFailed(error))),
    )),
  );
}

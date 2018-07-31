import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs/Observable/of';
import { UserService } from '../services/user.service';
import * as fromLogin from './actions/login';
import * as fromLogout from './actions/logout';
import * as fromRegister from './actions/register';
import * as fromGetUserProfile from './actions/getUserProfile';
import { ActionWithPayload } from '../../../common/types';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions,
              private userService: UserService) {
  }

  @Effect()
  login$ = this.actions$.pipe(
    ofType(fromLogin.actionTypes.START),
    mergeMap((action: ActionWithPayload) => this.userService.login(action.payload).pipe(
      map((data) => new fromLogin.LoginSuccess(data)),
      catchError(error => of(new fromLogin.LoginFailed(error))),
    )),
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(fromLogout.actionTypes.START),
    mergeMap(() => this.userService.logout().pipe(
      map(() => new fromLogout.LogoutSuccess(null)),
      catchError(error => of(new fromLogout.LogoutFailed(error))),
    )),
  );

  @Effect()
  register$ = this.actions$.pipe(
    ofType(fromRegister.actionTypes.START),
    mergeMap((action: ActionWithPayload) => this.userService.register(action.payload).pipe(
      map((data) => new fromRegister.RegisterSuccess(data)),
      catchError(error => of(new fromRegister.RegisterFailed(error))),
    )),
  );

  @Effect()
  getUserProfile$ = this.actions$.pipe(
    ofType(fromGetUserProfile.actionTypes.START),
    mergeMap(() => this.userService.getUserProfile().pipe(
      map((data) => new fromGetUserProfile.GetUserProfileSuccess(data)),
      catchError(error => of(new fromGetUserProfile.GetUserProfileFailed(error)))
    ))
  );

}

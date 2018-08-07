import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Auth } from './typings';
import { Store } from '@ngrx/store';
import { selectors } from '../store';
import { State } from '../../../store/reducer';
import { catchError, distinct, distinctUntilChanged, filter, map, switchMap, take } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Logout } from '../store/actions/logout';
import { actionTypes, RefreshToken, RefreshTokenSuccess } from '../store/actions/refreshToken';
import { AuthEffects } from '../store/effects';
import { ofType } from '@ngrx/effects';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token: BehaviorSubject<string>;
  isRefreshingToken = false;

  constructor(
    private store: Store<State>,
    private effects$: AuthEffects,
  ) {
    this.store.select(selectors.getToken).subscribe(
      (value) => this.token = new BehaviorSubject<string>(value)
    );
  }

  addToken = (req: HttpRequest<any>, token: string): HttpRequest<any> => {
    return req.clone({
      headers: req.headers.set(Auth.Header, `${Auth.Prefix} ${token}`),
    });
  }

  handle400Error = (error: HttpErrorResponse): Observable<HttpEvent<any>> => {
    this.store.dispatch(new Logout());

    return throwError(error);
  }

  handle401Error = (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> => {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;
      this.token.next(null);

      this.store.dispatch(new RefreshToken());
      return this.effects$.register$.pipe(
        ofType(actionTypes.SUCCESS),
        map((action) => {
          console.log(action.type);
          return action;
        }),
        switchMap((action: RefreshTokenSuccess) => {
          this.token.next(action.payload.access_token);
          return next.handle(this.addToken(req, action.payload.access_token));
        }),
        catchError(() => {
          this.store.dispatch(new Logout());
          return throwError('Unauthorized user.');
        })
      );
    }

    return this.token.pipe(
      filter((token) => token != null),
      take(1),
      switchMap((token) => next.handle(this.addToken(req, token))));
  }

  handleError = (error: Error) => (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> => {
    if (error instanceof HttpErrorResponse) {
      switch ((<HttpErrorResponse> error).status) {
        case (400):
          return this.handle400Error(error);
        case (401):
          return this.handle401Error(req, next);
      }
    }

    return throwError(error);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes('/api')) {
      return next.handle(req);
    }

    return this.token.pipe(
      filter(token => token != null),
      map(token => {
        console.log(token, req.url);
        return token;
      }),
      switchMap(token =>
        next.handle(this.addToken(req, token))
          .pipe(catchError(error => this.handleError(error)(req, next)))
      )
    );
  }
}

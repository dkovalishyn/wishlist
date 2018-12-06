import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Auth } from './typings';
import { Store } from '@ngrx/store';
import { selectors } from '../store';
import { AppState } from '../../../../store/reducer';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { throwError, zip } from 'rxjs';
import {  RefreshToken } from '../store/actions/refreshToken';
import { getRefreshToken, getToken } from '../store/selectors';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token: Observable<string>;
  isRefreshingToken = false;

  constructor(
    private store: Store<AppState>,
  ) {
    this.token = this.store.select(selectors.getToken);
  }

  addToken = (req: HttpRequest<any>, token: string): HttpRequest<any> => {
    return req.clone({
      headers: req.headers.set(Auth.Header, `${Auth.Prefix} ${token}`),
    });
  }

  handle400Error = (error: HttpErrorResponse): Observable<HttpEvent<any>> => {
    return throwError(error);
  }

  handle401Error = (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> => {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;

      zip(this.store.select(getToken), this.store.select(getRefreshToken))
        .pipe(take(1))
        .subscribe(([access_token, refresh_token]) =>
            this.store.dispatch(new RefreshToken({ grant_type: 'refresh_token', access_token, refresh_token }))
        );
    }

    return this.token.pipe(
      filter((token) => token.length > 0),
      switchMap((token) => next.handle(this.addToken(req, token))),
    );
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
      filter(token => token.length > 0),
      switchMap(token =>
        next.handle(this.addToken(req, token))
          .pipe(catchError(error => this.handleError(error)(req, next)))
      )
    );
  }
}

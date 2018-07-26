import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from './typings';
import { tap, shareReplay, catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { ApiService } from '../../api/api.service';
import * as fromRoot from '../../../store/index';
import { actions, selectors } from '../store';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  expiresAt$: Observable<number>;
  public isLoggedIn$: Observable<any>;

  constructor(private http: HttpClient,
              private api: ApiService,
              private store: Store<fromRoot.State>,
              private  router: Router) {
    this.expiresAt$ = this.store.select(selectors.getExpiresAt);
    this.isLoggedIn$ = this.expiresAt$.pipe(
      map(exp => (exp - Math.floor(Date.now() / 1000)) > 0),
    );
  }

  login = (user): Observable<AuthResponse> => {
    return this.http.post<AuthResponse>('/login', user)
      .pipe(
        tap(() => this.router.navigateByUrl('/wish')),
        shareReplay(),
        catchError(this.api.handleError)
      );
  }

  register = (user): Observable<AuthResponse> => {
    return this.http.post<AuthResponse>('/register', user)
      .pipe(
        tap(() => this.router.navigateByUrl('/wish')),
        shareReplay(),
        catchError(this.api.handleError)
      );
  }

  logout = () => {
    return this.http.get('/logout')
      .pipe(
        tap(() => this.router.navigateByUrl('/login')),
        shareReplay(),
        catchError(this.api.handleError)
      );
  }
}

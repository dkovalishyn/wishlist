import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthResponse, RefreshTokenBody } from './typings';
import { tap, shareReplay, catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { ApiService } from '../../api/api.service';
import { selectors } from '../store';
import { Router } from '@angular/router';
import { State } from '../../../store/reducer';
import { Person } from '../../../models/Person';

@Injectable()
export class UserService {
  public isLoggedIn$: Observable<boolean>;

  constructor(private http: HttpClient,
              private api: ApiService,
              private store: Store<State>,
              private  router: Router) {
    this.isLoggedIn$ = this.store.select(selectors.getExpiresIn).pipe(
      map((exp) => (exp - Math.floor(Date.now() / 1000)) > 0),
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

  refreshToken = (refreshTokenBody: RefreshTokenBody) => {
    return this.http.post<AuthResponse>('/token', refreshTokenBody)
      .pipe(
        tap(() => this.router.navigateByUrl('/wish')),
        shareReplay(),
        catchError(this.api.handleError)
      );
  }

  getUserProfile = () => this.api.get<Person>('me');
}

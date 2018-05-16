import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StorageKeys, AuthResponse } from './typings';
import { tap, shareReplay, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api/api.service';

const getExpiration = (): number => {
  return Number(localStorage.getItem(StorageKeys.TokenExpires)) || 0;
};

const setSession = (authResult: AuthResponse): void => {
  localStorage.setItem(StorageKeys.Token, authResult.token);
  localStorage.setItem(StorageKeys.TokenExpires, String(authResult.exp));
};


@Injectable()
export class UserService {
  constructor(private http: HttpClient,
              private api: ApiService) {
  }

  login(user): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('/login', user)
      .pipe(
        tap(res => setSession(res)),
        shareReplay(),
        catchError(this.api.handleError)
      );
  }

  register(user): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('/register', user)
      .pipe(
        tap(res => setSession(res)),
        shareReplay(),
        catchError(this.api.handleError)
      );
  }

  logout() {
    localStorage.removeItem(StorageKeys.Token);
    localStorage.removeItem(StorageKeys.TokenExpires);
  }

  public isLoggedIn(): boolean {
    const now = Math.floor(Date.now() / 1000);
    return (getExpiration() - now) > 0;
  }
}

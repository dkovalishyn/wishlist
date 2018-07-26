import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth } from './typings';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../store/index';
import { selectors } from '../store';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token = '';

  constructor(private store: Store<fromRoot.State>) {
    this.store.select(selectors.getToken).subscribe((value) => {
      this.token = value;
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.token.length > 0) {
      const cloned = req.clone({
        headers: req.headers.set(Auth.Header, `${Auth.Prefix} ${this.token}`),
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}

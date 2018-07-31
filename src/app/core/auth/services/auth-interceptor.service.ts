import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Auth } from './typings';
import { Store } from '@ngrx/store';
import { selectors } from '../store';
import { State } from '../../../store/reducer';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token = '';

  constructor(private store: Store<State>) {
    this.store.select(selectors.getToken).subscribe((value) => {
      this.token = value;
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(this.token);
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

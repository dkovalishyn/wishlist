import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import User from '../models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  constructor(private api: ApiService) {
  }

  authenticate(user): Observable<User> {
    return this.api.post('login', user);
  }
}

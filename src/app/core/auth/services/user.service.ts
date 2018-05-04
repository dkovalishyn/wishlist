import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../api/api.service';
import User from '../models/user';

@Injectable()
export class UserService {
  constructor(private api: ApiService) {
  }

  authenticate(user): Observable<User> {
    return this.api.post('login', user);
  }
}

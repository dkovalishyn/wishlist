import { Injectable } from '@angular/core';
import { Wish } from '../models/wish';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';

@Injectable()
export class WishService {
  private wishesUrl = 'wish';

  constructor(
    private api: ApiService
  ) {}

  getWishes(): Observable<Wish[]> {
     return this.api.makeRequest<Wish[]>(this.wishesUrl);
  }
}

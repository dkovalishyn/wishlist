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
     return this.api.get<Wish[]>(this.wishesUrl);
  }

  getWish(id: string): Observable<Wish> {
    return this.api.get<Wish>(`${this.wishesUrl}/${id}`);
  }

  addWish(wish: Wish): Observable<Wish[]> {
      return this.api.post<Wish[]>(this.wishesUrl, wish);
  }
}

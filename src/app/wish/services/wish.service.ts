import { Injectable } from '@angular/core';
import { Wish } from '../../models/wish';
import { Observable } from 'rxjs';
import { ApiService } from '../../core/api/api.service';

@Injectable()
export class
WishService {
  private wishesUrl = 'wish';

  constructor(
    private api: ApiService
  ) {}

  getWishes(): Observable<Wish[]> {
     return this.api.get<Wish[]>(this.wishesUrl);
  }

  addWish(wish: Wish): Observable<Wish[]> {
    return this.api.post<Wish[]>(this.wishesUrl, wish);
  }

  getWish(id: string): Observable<Wish> {
     return this.api.get<Wish>(this.addIdToUrl(id));
  }

  updateWish(wish: Wish): Observable<Wish[]> {
    return this.api.put<Wish[]>(this.addIdToUrl(wish._id), wish);
  }

  deleteWish(id: string): Observable<Wish> {
      return this.api.delete<Wish>(this.addIdToUrl(id));
  }

  private addIdToUrl(id) {
    return `${this.wishesUrl}/${id}`;
  }
}

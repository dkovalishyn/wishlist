import { Injectable } from '@angular/core';
import { Wish } from './wish';

@Injectable()
export class WishService {
  private wishList: Wish[];

  constructor() {}

 getWishes(): Wish[] {
     return this.wishList;
 }

}

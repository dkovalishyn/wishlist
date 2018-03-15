import { TestBed, inject } from '@angular/core/testing';

import { WishListService } from './wishlist.service';

describe('WishlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WishListService]
    });
  });

  it('should be created', inject([WishListService], (service: WishListService) => {
    expect(service).toBeTruthy();
  }));
});

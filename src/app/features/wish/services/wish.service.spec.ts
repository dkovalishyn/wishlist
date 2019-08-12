import { inject, TestBed } from '@angular/core/testing';

import { WishService } from './wish.service';

describe('WishlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WishService]
    });
  });

  it('should be created', inject([WishService], (service: WishService) => {
    expect(service).toBeTruthy();
  }));
});

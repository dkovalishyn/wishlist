import { TestBed, inject } from '@angular/core/testing';

import { WishFormService } from './wish-form.service';

describe('WishFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WishFormService]
    });
  });

  it('should be created', inject([WishFormService], (service: WishFormService) => {
    expect(service).toBeTruthy();
  }));
});

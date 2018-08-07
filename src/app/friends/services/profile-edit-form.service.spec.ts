import { TestBed, inject } from '@angular/core/testing';

import { ProfileEditFormService } from './profile-edit-form.service';

describe('ProfileEditFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileEditFormService]
    });
  });

  it('should be created', inject([ProfileEditFormService], (service: ProfileEditFormService) => {
    expect(service).toBeTruthy();
  }));
});

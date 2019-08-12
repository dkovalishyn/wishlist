import { inject, TestBed } from '@angular/core/testing';

import { FieldControlService } from './field-control.service';

describe('QuestionControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FieldControlService]
    });
  });

  it('should be created', inject([FieldControlService], (service: FieldControlService) => {
    expect(service).toBeTruthy();
  }));
});

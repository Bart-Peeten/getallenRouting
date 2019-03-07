import { TestBed } from '@angular/core/testing';

import { ConfirmDeactivatorService } from './confirm-deactivator.service';

describe('ConfirmDeactivatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfirmDeactivatorService = TestBed.get(ConfirmDeactivatorService);
    expect(service).toBeTruthy();
  });
});

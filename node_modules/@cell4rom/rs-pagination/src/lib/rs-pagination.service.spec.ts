import { TestBed } from '@angular/core/testing';

import { RsPaginationService } from './rs-pagination.service';

describe('RsPaginationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RsPaginationService = TestBed.get(RsPaginationService);
    expect(service).toBeTruthy();
  });
});

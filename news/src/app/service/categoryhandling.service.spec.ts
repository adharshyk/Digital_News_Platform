import { TestBed } from '@angular/core/testing';

import { CategoryhandlingService } from './categoryhandling.service';

describe('CategoryhandlingService', () => {
  let service: CategoryhandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryhandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

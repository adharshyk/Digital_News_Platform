import { TestBed } from '@angular/core/testing';

import { LoggedinuserService } from './loggedinuser.service';

describe('LoggedinuserService', () => {
  let service: LoggedinuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggedinuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

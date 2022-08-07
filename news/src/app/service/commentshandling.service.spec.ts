import { TestBed } from '@angular/core/testing';

import { CommentshandlingService } from './commentshandling.service';

describe('CommentshandlingService', () => {
  let service: CommentshandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentshandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

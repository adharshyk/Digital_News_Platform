import { TestBed } from '@angular/core/testing';

import { ArticlehandlingService } from './articlehandling.service';

describe('ArticlehandlingService', () => {
  let service: ArticlehandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlehandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

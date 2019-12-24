import { TestBed } from '@angular/core/testing';

import { SearchBookService } from './search-book.service';

describe('SearchBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchBookService = TestBed.get(SearchBookService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CrudBookService } from './crud-book.service';

describe('CrudBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudBookService = TestBed.get(CrudBookService);
    expect(service).toBeTruthy();
  });
});

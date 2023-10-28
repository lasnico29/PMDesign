import { TestBed } from '@angular/core/testing';

import { BackConectionService } from './back-conection.service';

describe('BackConectionService', () => {
  let service: BackConectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackConectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

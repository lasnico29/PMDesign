import { TestBed } from '@angular/core/testing';

import { ServProductosService } from './serv-productos.service';

describe('ServProductosService', () => {
  let service: ServProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

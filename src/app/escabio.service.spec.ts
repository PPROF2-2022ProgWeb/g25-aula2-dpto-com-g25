import { TestBed } from '@angular/core/testing';

import { EscabioService } from './escabio.service';

describe('EscabioService', () => {
  let service: EscabioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscabioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

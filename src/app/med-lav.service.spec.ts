import { TestBed } from '@angular/core/testing';

import { MedLavService } from './med-lav.service';

describe('MedLavService', () => {
  let service: MedLavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedLavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

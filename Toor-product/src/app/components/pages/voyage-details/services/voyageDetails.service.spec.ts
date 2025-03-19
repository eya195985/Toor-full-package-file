import { TestBed } from '@angular/core/testing';

import { VoyageDetailsService } from './voyageDetails.service';

describe('VoyageDetailsService', () => {
  let service: AnnonceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnonceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

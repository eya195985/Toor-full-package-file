import { TestBed } from '@angular/core/testing';

import { VoyageDataService } from './voyage-data.service';

describe('VoyageDataService', () => {
  let service: VoyageDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoyageDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CruiseHelperService } from './cruise-helper.service';

describe('CruiseHelperService', () => {
  let service: CruiseHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CruiseHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

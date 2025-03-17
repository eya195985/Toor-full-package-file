import { TestBed } from '@angular/core/testing';

import { CarHelperService } from './car-helper.service';

describe('CarHelperService', () => {
  let service: CarHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

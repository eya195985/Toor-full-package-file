import { TestBed } from '@angular/core/testing';

import { HotelHelperService } from './hotel-helper.service';

describe('HotelHelperService', () => {
  let service: HotelHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

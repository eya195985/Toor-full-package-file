import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomFlightsComponent } from './recom-flights.component';

describe('RecomFlightsComponent', () => {
  let component: RecomFlightsComponent;
  let fixture: ComponentFixture<RecomFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomFlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

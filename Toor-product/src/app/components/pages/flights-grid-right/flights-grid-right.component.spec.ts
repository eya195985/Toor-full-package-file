import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsGridRightComponent } from './flights-grid-right.component';

describe('FlightsGridRightComponent', () => {
  let component: FlightsGridRightComponent;
  let fixture: ComponentFixture<FlightsGridRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsGridRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsGridRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

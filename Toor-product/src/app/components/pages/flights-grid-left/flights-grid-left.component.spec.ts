import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsGridLeftComponent } from './flights-grid-left.component';

describe('FlightsGridLeftComponent', () => {
  let component: FlightsGridLeftComponent;
  let fixture: ComponentFixture<FlightsGridLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsGridLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsGridLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

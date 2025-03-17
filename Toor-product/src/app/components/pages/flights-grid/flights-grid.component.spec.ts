import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsGridComponent } from './flights-grid.component';

describe('FlightsGridComponent', () => {
  let component: FlightsGridComponent;
  let fixture: ComponentFixture<FlightsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

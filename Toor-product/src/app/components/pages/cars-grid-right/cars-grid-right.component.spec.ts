import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsGridRightComponent } from './cars-grid-right.component';

describe('CarsGridRightComponent', () => {
  let component: CarsGridRightComponent;
  let fixture: ComponentFixture<CarsGridRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsGridRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsGridRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

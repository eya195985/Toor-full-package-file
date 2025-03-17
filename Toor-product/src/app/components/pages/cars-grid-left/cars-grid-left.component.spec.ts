import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsGridLeftComponent } from './cars-grid-left.component';

describe('CarsGridLeftComponent', () => {
  let component: CarsGridLeftComponent;
  let fixture: ComponentFixture<CarsGridLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsGridLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsGridLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

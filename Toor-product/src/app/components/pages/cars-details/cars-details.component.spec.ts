import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsDetailsComponent } from './cars-details.component';

describe('CarsDetailsComponent', () => {
  let component: CarsDetailsComponent;
  let fixture: ComponentFixture<CarsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

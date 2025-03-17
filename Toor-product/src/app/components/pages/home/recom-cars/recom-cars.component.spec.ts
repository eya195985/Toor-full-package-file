import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomCarsComponent } from './recom-cars.component';

describe('RecomCarsComponent', () => {
  let component: RecomCarsComponent;
  let fixture: ComponentFixture<RecomCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

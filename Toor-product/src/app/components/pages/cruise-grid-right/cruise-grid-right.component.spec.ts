import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiseGridRightComponent } from './cruise-grid-right.component';

describe('CruiseGridRightComponent', () => {
  let component: CruiseGridRightComponent;
  let fixture: ComponentFixture<CruiseGridRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CruiseGridRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CruiseGridRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

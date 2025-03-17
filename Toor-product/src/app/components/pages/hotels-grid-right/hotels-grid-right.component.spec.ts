import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsGridRightComponent } from './hotels-grid-right.component';

describe('HotelsGridRightComponent', () => {
  let component: HotelsGridRightComponent;
  let fixture: ComponentFixture<HotelsGridRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsGridRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsGridRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

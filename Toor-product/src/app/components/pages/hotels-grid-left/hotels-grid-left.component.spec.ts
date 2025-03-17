import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsGridLeftComponent } from './hotels-grid-left.component';

describe('HotelsGridLeftComponent', () => {
  let component: HotelsGridLeftComponent;
  let fixture: ComponentFixture<HotelsGridLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsGridLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsGridLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

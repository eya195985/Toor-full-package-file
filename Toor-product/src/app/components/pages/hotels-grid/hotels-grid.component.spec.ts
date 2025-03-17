import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsGridComponent } from './hotels-grid.component';

describe('HotelsGridComponent', () => {
  let component: HotelsGridComponent;
  let fixture: ComponentFixture<HotelsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

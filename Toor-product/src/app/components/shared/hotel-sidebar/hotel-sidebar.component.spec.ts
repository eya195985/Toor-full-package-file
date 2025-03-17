import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSidebarComponent } from './hotel-sidebar.component';

describe('HotelSidebarComponent', () => {
  let component: HotelSidebarComponent;
  let fixture: ComponentFixture<HotelSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

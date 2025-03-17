import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSidebarComponent } from './car-sidebar.component';

describe('CarSidebarComponent', () => {
  let component: CarSidebarComponent;
  let fixture: ComponentFixture<CarSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

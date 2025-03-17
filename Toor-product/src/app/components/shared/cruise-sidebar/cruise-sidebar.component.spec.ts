import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiseSidebarComponent } from './cruise-sidebar.component';

describe('CruiseSidebarComponent', () => {
  let component: CruiseSidebarComponent;
  let fixture: ComponentFixture<CruiseSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CruiseSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CruiseSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

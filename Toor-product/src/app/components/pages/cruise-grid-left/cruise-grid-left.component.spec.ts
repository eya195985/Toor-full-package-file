import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiseGridLeftComponent } from './cruise-grid-left.component';

describe('CruiseGridLeftComponent', () => {
  let component: CruiseGridLeftComponent;
  let fixture: ComponentFixture<CruiseGridLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CruiseGridLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CruiseGridLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

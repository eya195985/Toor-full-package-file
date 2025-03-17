import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomCruiseComponent } from './recom-cruise.component';

describe('RecomCruiseComponent', () => {
  let component: RecomCruiseComponent;
  let fixture: ComponentFixture<RecomCruiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomCruiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomCruiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

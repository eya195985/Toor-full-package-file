import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomHotelsComponent } from './recom-hotels.component';

describe('RecomHotelsComponent', () => {
  let component: RecomHotelsComponent;
  let fixture: ComponentFixture<RecomHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomHotelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

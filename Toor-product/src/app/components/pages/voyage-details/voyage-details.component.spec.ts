import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageDetailsComponent } from './voyage-details.component';

describe('VoyageDetailsComponent', () => {
  let component: VoyageDetailsComponent;
  let fixture: ComponentFixture<VoyageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoyageDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

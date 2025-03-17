import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeLogoComponent } from './edite-logo.component';

describe('EditeLogoComponent', () => {
  let component: EditeLogoComponent;
  let fixture: ComponentFixture<EditeLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

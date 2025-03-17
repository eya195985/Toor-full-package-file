import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpAgenceComponent } from './sign-up-agence.component';

describe('SignUpAgenceComponent', () => {
  let component: SignUpAgenceComponent;
  let fixture: ComponentFixture<SignUpAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpAgenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

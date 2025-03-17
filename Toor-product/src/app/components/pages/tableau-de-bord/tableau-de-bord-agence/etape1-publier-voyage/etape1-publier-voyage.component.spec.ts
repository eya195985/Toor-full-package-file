import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape1PublierVoyageComponent } from './etape1-publier-voyage.component';

describe('Etape1PublierVoyageComponent', () => {
  let component: Etape1PublierVoyageComponent;
  let fixture: ComponentFixture<Etape1PublierVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Etape1PublierVoyageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Etape1PublierVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

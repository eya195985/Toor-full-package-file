import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape2PublierVoyageComponent } from './etape2-publier-voyage.component';

describe('Etape2PublierVoyageComponent', () => {
  let component: Etape2PublierVoyageComponent;
  let fixture: ComponentFixture<Etape2PublierVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Etape2PublierVoyageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Etape2PublierVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

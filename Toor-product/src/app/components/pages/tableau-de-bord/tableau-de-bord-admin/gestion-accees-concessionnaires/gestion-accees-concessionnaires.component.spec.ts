import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAcceesConcessionnairesComponent } from './gestion-accees-concessionnaires.component';

describe('GestionAcceesConcessionnairesComponent', () => {
  let component: GestionAcceesConcessionnairesComponent;
  let fixture: ComponentFixture<GestionAcceesConcessionnairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionAcceesConcessionnairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAcceesConcessionnairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

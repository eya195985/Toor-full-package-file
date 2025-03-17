import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAnnoncesConcessionnairesComponent } from './gestion-annonces-concessionnaires.component';

describe('GestionAnnoncesConcessionnairesComponent', () => {
  let component: GestionAnnoncesConcessionnairesComponent;
  let fixture: ComponentFixture<GestionAnnoncesConcessionnairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionAnnoncesConcessionnairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAnnoncesConcessionnairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

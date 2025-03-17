import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauDeBordAgenceComponent } from './tableau-de-bord-agence.component';

describe('TableauDeBordAgenceComponent', () => {
  let component: TableauDeBordAgenceComponent;
  let fixture: ComponentFixture<TableauDeBordAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauDeBordAgenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauDeBordAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

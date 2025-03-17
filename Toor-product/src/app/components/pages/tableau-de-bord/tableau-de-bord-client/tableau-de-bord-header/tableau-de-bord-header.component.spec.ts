import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauDeBordHeaderComponent } from './tableau-de-bord-header.component';

describe('TableauDeBordHeaderComponent', () => {
  let component: TableauDeBordHeaderComponent;
  let fixture: ComponentFixture<TableauDeBordHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauDeBordHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauDeBordHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

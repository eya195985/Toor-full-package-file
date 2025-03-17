import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauDeBordContentComponent } from './tableau-de-bord-content.component';

describe('TableauDeBordContentComponent', () => {
  let component: TableauDeBordContentComponent;
  let fixture: ComponentFixture<TableauDeBordContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauDeBordContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauDeBordContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

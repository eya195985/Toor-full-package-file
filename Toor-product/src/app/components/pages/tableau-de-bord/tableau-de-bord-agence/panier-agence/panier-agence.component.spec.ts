import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierAgenceComponent } from './panier-agence.component';

describe('PanierAgenceComponent', () => {
  let component: PanierAgenceComponent;
  let fixture: ComponentFixture<PanierAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanierAgenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

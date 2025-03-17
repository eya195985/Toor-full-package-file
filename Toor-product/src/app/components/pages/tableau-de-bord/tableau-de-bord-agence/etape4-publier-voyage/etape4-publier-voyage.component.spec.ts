import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape4PublierVoyageComponent } from './etape4-publier-voyage.component';

describe('Etape4PublierVoyageComponent', () => {
  let component: Etape4PublierVoyageComponent;
  let fixture: ComponentFixture<Etape4PublierVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Etape4PublierVoyageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Etape4PublierVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape3PublierVoyageComponent } from './etape3-publier-voyage.component';

describe('Etape3PublierVoyageComponent', () => {
  let component: Etape3PublierVoyageComponent;
  let fixture: ComponentFixture<Etape3PublierVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Etape3PublierVoyageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Etape3PublierVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

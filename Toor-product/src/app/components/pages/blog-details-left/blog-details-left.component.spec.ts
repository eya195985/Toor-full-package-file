import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailsLeftComponent } from './blog-details-left.component';

describe('BlogDetailsLeftComponent', () => {
  let component: BlogDetailsLeftComponent;
  let fixture: ComponentFixture<BlogDetailsLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDetailsLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetailsLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

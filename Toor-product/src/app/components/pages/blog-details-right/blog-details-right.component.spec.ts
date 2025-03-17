import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailsRightComponent } from './blog-details-right.component';

describe('BlogDetailsRightComponent', () => {
  let component: BlogDetailsRightComponent;
  let fixture: ComponentFixture<BlogDetailsRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDetailsRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetailsRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

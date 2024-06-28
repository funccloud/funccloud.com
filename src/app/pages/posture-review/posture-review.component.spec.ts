import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostureReviewComponent } from './posture-review.component';

describe('PostureReviewComponent', () => {
  let component: PostureReviewComponent;
  let fixture: ComponentFixture<PostureReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostureReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostureReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

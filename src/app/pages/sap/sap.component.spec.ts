import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinopsComponent } from './finops.component';

describe('FinopsComponent', () => {
  let component: FinopsComponent;
  let fixture: ComponentFixture<FinopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinopsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

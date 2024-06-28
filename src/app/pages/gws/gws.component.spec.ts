import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GwsComponent } from './gws.component';

describe('GwsComponent', () => {
  let component: GwsComponent;
  let fixture: ComponentFixture<GwsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GwsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

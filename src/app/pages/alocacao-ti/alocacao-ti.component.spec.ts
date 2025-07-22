import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlocacaoTiComponent } from './alocacao-ti.component';

describe('AlocacaoTiComponent', () => {
  let component: AlocacaoTiComponent;
  let fixture: ComponentFixture<AlocacaoTiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlocacaoTiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlocacaoTiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

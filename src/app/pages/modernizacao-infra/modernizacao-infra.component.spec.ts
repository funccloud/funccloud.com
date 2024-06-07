import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernizacaoInfraComponent } from './modernizacao-infra.component';

describe('ModernizacaoInfraComponent', () => {
  let component: ModernizacaoInfraComponent;
  let fixture: ComponentFixture<ModernizacaoInfraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModernizacaoInfraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModernizacaoInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

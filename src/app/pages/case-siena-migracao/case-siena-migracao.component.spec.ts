import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSienaMigracaoComponent } from './case-siena-migracao.component';

describe('CaseSienaMigracaoComponent', () => {
  let component: CaseSienaMigracaoComponent;
  let fixture: ComponentFixture<CaseSienaMigracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseSienaMigracaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseSienaMigracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

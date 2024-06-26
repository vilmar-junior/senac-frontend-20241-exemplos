import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinacaoDetalheComponent } from './vacinacao-detalhe.component';

describe('VacinacaoDetalheComponent', () => {
  let component: VacinacaoDetalheComponent;
  let fixture: ComponentFixture<VacinacaoDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacinacaoDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacinacaoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoFormCadastroComponent } from './produto-form-cadastro.component';

describe('ProdutoFormCadastroComponent', () => {
  let component: ProdutoFormCadastroComponent;
  let fixture: ComponentFixture<ProdutoFormCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoFormCadastroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutoFormCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

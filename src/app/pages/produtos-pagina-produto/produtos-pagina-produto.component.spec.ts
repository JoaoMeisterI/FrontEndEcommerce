import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosPaginaProdutoComponent } from './produtos-pagina-produto.component';

describe('ProdutosPaginaProdutoComponent', () => {
  let component: ProdutosPaginaProdutoComponent;
  let fixture: ComponentFixture<ProdutosPaginaProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosPaginaProdutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutosPaginaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

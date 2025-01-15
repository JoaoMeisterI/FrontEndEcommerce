import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioFormCadastroComponent } from './usuario-form-cadastro.component';

describe('UsuarioFormCadastroComponent', () => {
  let component: UsuarioFormCadastroComponent;
  let fixture: ComponentFixture<UsuarioFormCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioFormCadastroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuarioFormCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

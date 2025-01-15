import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/Usuario/usuario-service.service';

@Component({
  selector: 'app-usuario-form-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './usuario-form-cadastro.component.html',
  styleUrls: ['./usuario-form-cadastro.component.css']
})
export class UsuarioFormCadastroComponent implements OnInit {
  @Output() aoEnviar = new EventEmitter<any>();

  usuarioDados: any = null;

  usuarioForm!: FormGroup;

  constructor(
    private usuarioService: UsuarioService, 
    private router: Router, 
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    const idUsuario = Number(this.route.snapshot.paramMap.get('id'));

    if (idUsuario !== 0) {
      await this.carregaInformacoesUsuario(idUsuario);
    }
    
    console.log("Usuário Carregado:");
    console.log(this.usuarioDados);

    this.initForm();
  }

  enviar(): void {
    if (this.usuarioForm.valid) {
      this.aoEnviar.emit(this.usuarioForm.getRawValue());
    } else {
      console.error('Formulário inválido:', this.usuarioForm.errors);
    }
  }

  async carregaInformacoesUsuario(idUsuario: number): Promise<void> {
    try {
      const data = await firstValueFrom(this.usuarioService.GetUsuarioById(idUsuario));
      this.usuarioDados = data.dados;
      console.log('Dados do Usuário:', this.usuarioDados);
    } catch (error) {
      console.error('Erro ao carregar dados do usuário:', error);
    }
  }

  initForm(): void {
    this.usuarioForm = new FormGroup({
      id: new FormControl(this.usuarioDados ? this.usuarioDados.id : 0),
      nomeCompleto: new FormControl(this.usuarioDados ? this.usuarioDados.nomeCompleto : '', [Validators.required]),
      user: new FormControl(this.usuarioDados ? this.usuarioDados.user : '', [Validators.required]),
      senha: new FormControl(this.usuarioDados ? this.usuarioDados.senha : '', [Validators.required]),
      telefone: new FormControl(this.usuarioDados ? this.usuarioDados.telefone : '', [Validators.required]),
      endereco: new FormControl(this.usuarioDados ? this.usuarioDados.endereco : '', [Validators.required]),
      metodoPagamento: new FormControl(this.usuarioDados ? this.usuarioDados.metodoPagamento : '', [Validators.required]),
      tipoUser: new FormControl(this.usuarioDados ? this.usuarioDados.tipoUser : '', [Validators.required]),
    });
  }

  voltar(): void {
    this.router.navigate(['/usuarios']); // Navega de volta para a lista de usuários
  }
}

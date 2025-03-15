import { Usuario } from './../../models/Usuario';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule,FormsModule, AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ErrorStateMatcher } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatCard } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { UsuarioService } from '../../services/Usuario/usuario-service.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { AuthUserService } from '../../services/Auth/auth-user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule,MatButtonModule,
    MatFormFieldModule,MatIconModule,MatInputModule,MatCard,MatCardContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit,ErrorStateMatcher {

  loginForm!: FormGroup;
  hide = signal(true);
  usuarioTentativa !: Usuario;
  frase !: string;
  fraseLink !: string;

  constructor(private usuarioService:UsuarioService,private router: Router,private authService:AuthUserService){}

  ngOnInit(): void {
    this.IniciaValoresFormulario();
  }

  IniciaValoresFormulario(): void {
    this.loginForm = new FormGroup({
      emailUsuarioControl: new FormControl("",[Validators.required,Validators.email]),
      senhaUsuarioControl: new FormControl("",[Validators.required]),
    })
  }

  HideSenha(event : MouseEvent)
  {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  async ValidaUser():Promise<void>
  {
    if(this.loginForm.valid)
    {
      const user = this.loginForm.get('emailUsuarioControl')?.value
      const senha = this.loginForm.get('senhaUsuarioControl')?.value

      const data = await firstValueFrom(this.usuarioService.GetUsuarioByCredenciais(user,senha))
      if(data.dados && Object.keys(data.dados).length > 0){
        console.log(1)
        this.usuarioTentativa = data.dados;
      }

      if (data.dados!=null) {
        this.authService.SetUsuario(this.usuarioTentativa);
        this.router.navigate(['/']);
      } else {
        this.frase = "Usuário Não Encontrado";
        this.fraseLink = " Clique Aqui !";
      }

    }
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean
  {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

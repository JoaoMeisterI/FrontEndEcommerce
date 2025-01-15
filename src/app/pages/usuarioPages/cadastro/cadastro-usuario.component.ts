import { Component } from '@angular/core';
import { UsuarioService } from '../../../services/Usuario/usuario-service.service';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/Usuario';
import { UsuarioFormCadastroComponent } from '../../../componentes/usuario-form-cadastro/usuario-form-cadastro.component';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [UsuarioFormCadastroComponent],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.css'
})
export class CadastroUsuarioComponent {

  constructor(private usuarioService:UsuarioService,private router:Router){}

  async createUsuario(usuario:Usuario)
  {
    this.usuarioService.CreateUsuario(usuario).subscribe((data=>{
        this.router.navigate(['/'])
    }))
  }

}

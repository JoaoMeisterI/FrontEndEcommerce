import { Component } from '@angular/core';
import { UsuarioService } from '../../../services/Usuario/usuario-service.service';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/Usuario';
import { UsuarioFormCadastroComponent } from '../../../componentes/usuario-form-cadastro/usuario-form-cadastro.component';


@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [UsuarioFormCadastroComponent],
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})
export class EditarUsuarioComponent {
  
  constructor(private usuarioService:UsuarioService,private router:Router){}

  async updateUsuario(usuario:Usuario)
  {

    console.log(3)

      this.usuarioService.UpdateUsuario(usuario).subscribe((data=>{
          this.router.navigate(['/'])
      }))
  }

}

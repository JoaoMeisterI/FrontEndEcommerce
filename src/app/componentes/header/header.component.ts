import { Usuario } from './../../models/Usuario';
import { AuthUserService } from './../../services/Auth/auth-user.service';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/Produto/produto.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'header-app',
  standalone: true,
  imports: [CommonModule
    ,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  implements OnInit{

  entrarSair: string = "Entrar";

  constructor(private produtoService:ProdutoService,private router:Router,private authService:AuthUserService){}

  categoriaList:string[] = [];
  usuario:Usuario | null = null;

  ngOnInit(): void {
    this.authService.usuario$.subscribe(user => {
      this.usuario = user;
    })

    if(this.usuario?.id!=0)
    {
      this.entrarSair = "Sair";
    }

  }

  Logout(){
    this.authService.LogoutUser();
    this.router.navigate(['/login/usuario'])
  }

}

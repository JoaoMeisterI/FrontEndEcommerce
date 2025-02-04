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
  
  constructor(private produtoService:ProdutoService,private router:Router){}
  
  categoriaList:string[] = [];

  ngOnInit(): void {

      this.produtoService.GetCategoriasProduto().subscribe(data =>{
        this.categoriaList = data.dados
      })
  }
    
}

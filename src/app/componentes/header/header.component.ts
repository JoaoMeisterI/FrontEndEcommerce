import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/Produto/produto.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
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

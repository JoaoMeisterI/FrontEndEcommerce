import { Component } from '@angular/core';
import { ProdutoService } from '../../../services/Produto/produto.service';
import { Router } from '@angular/router';
import { Produto } from '../../../models/Produto';
import { ProdutoFormCadastroComponent } from "../../../componentes/produto-form-cadastro/produto-form-cadastro.component";

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [ProdutoFormCadastroComponent],
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.css'
})
export class CadastroProdutoComponent {

  constructor(private produtoService:ProdutoService,private router:Router){}

  async createProduto(produto:Produto)
  {
    this.produtoService.CreateProduto(produto).subscribe((data=>{
        this.router.navigate(['/'])
    }))
  }

}

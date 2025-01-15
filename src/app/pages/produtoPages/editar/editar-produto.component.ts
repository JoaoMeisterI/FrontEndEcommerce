import { Component } from '@angular/core';
import { ProdutoService } from '../../../services/Produto/produto.service';
import { Router } from '@angular/router';
import { Produto } from '../../../models/Produto';
import { ProdutoFormCadastroComponent } from "../../../componentes/produto-form-cadastro/produto-form-cadastro.component";


@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [ProdutoFormCadastroComponent],
  templateUrl: './editar-produto.component.html',
  styleUrl: './editar-produto.component.css'
})
export class EditarProdutoComponent {
  
  constructor(private produtoService:ProdutoService,private router:Router){}

  async updateProduto(produto:Produto)
  {

    console.log(3)

      this.produtoService.UpdateProduto(produto).subscribe((data=>{
          this.router.navigate(['/'])
      }))
  }

}

import { Produto } from './../../models/Produto';
import { ProdutoService } from './../../services/Produto/produto.service';
import { Component, Input, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-pagina-produto',
  standalone: true,
  imports: [],
  templateUrl: './pagina-produto.component.html',
  styleUrl: './pagina-produto.component.scss'
})
export class PaginaProdutoComponent implements OnInit {

  constructor(private produtoService:ProdutoService){}

  @Input() idProduto!:number;
  produto!:Produto;
  valorParcelado!:string;


  async ngOnInit(): Promise<void> {
    await this.GetProdutoById()

    this.valorParcelado = (this.produto.precoVenda/6).toFixed(2);
  }

  async GetProdutoById() {

    const data = await firstValueFrom(this.produtoService.GetProdutoById(this.idProduto));
    this.produto = data.dados
  }


}

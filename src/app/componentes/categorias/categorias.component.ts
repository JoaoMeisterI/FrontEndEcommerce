import { Component,Input,OnChanges,OnInit} from '@angular/core';
import { CardComponent } from "../utils/card/card.component";
import { Produto } from '../../models/Produto';
import { ProdutoService } from '../../services/Produto/produto.service';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'categorias-app',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss'
})
export class categoriasComponent implements OnChanges {

    constructor(private produtoService:ProdutoService){}

    @Input() TitlePage!:string;

    produtos:Produto[] = []

    async ngOnChanges(): Promise<void>
    {
        await this.GetProdutoByCategoria()
    }

    async GetProdutoByCategoria() {

      const data = await firstValueFrom(this.produtoService.GetProdutoByCategoria(this.TitlePage));

      this.produtos = data.dados.filter(produto => produto.imagemBase64.length > 0)
    }
}




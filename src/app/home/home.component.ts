import { Component } from '@angular/core';
import { HeaderComponent } from "../componentes/header/header.component";
import { PaperMidiaComponent } from "../componentes/paper-midia/paper-midia.component";
import { BlocoDemonstrativoComponent } from "../componentes/bloco-demonstrativo/bloco-demonstrativo.component";
import { CardProdutoComponent } from "../componentes/card-produto/card-produto.component";
import { FavoritosComponent } from "../componentes/favoritos/favoritos.component";
import { CarrinhoComponent } from "../componentes/carrinho/carrinho.component";
import { CardCarrinhoComponent } from "../componentes/utils/card-carrinho/card-carrinho.component";
import { CardComponent } from "../componentes/utils/card/card.component";
import { PaginaProdutoComponent } from "../componentes/pagina-produto/pagina-produto.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, PaperMidiaComponent, BlocoDemonstrativoComponent, CardProdutoComponent, FavoritosComponent, CarrinhoComponent, CardCarrinhoComponent, CardComponent, PaginaProdutoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

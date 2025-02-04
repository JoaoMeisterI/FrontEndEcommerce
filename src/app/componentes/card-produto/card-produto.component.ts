import { Component } from '@angular/core';
import { CardComponent } from "../utils/card/card.component";

@Component({
  selector: 'app-card-produto',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-produto.component.html',
  styleUrl: './card-produto.component.scss'
})
export class CardProdutoComponent {

}

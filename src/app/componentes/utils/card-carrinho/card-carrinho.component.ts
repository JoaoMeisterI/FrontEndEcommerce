import { Component } from '@angular/core';

@Component({
  selector: 'app-card-carrinho',
  standalone: true,
  imports: [],
  templateUrl: './card-carrinho.component.html',
  styleUrl: './card-carrinho.component.scss'
})
export class CardCarrinhoComponent {
  contador : number  = 0

  addContador(): void{
    this.contador+=1;
  }

  removeContador(): void{
    this.contador-=1;
  }

}

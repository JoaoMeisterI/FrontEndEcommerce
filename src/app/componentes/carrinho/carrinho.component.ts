import { Component, ElementRef, ViewChild, AfterViewInit, viewChild } from '@angular/core';
import { CardCarrinhoComponent } from '../utils/card-carrinho/card-carrinho.component';
import { ResumoCarrinhoComponent } from '../utils/resumo-carrinho/resumo-carrinho.component';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CardCarrinhoComponent, ResumoCarrinhoComponent, HeaderComponent],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.scss'
})
export class CarrinhoComponent {

}

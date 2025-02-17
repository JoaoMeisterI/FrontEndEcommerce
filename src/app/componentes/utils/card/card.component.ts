import { Produto } from './../../../models/Produto';
import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from "../dropdown/dropdown.component";
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, DropdownComponent,RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{

  @Input() nomeProduto!:string;
  @Input() valorProduto!:number;
  qtdParcelas!:string;
  @Input() base64Imagem!:string;
  @Input() produto!:Produto;

  async ngOnInit(): Promise<void> {

    if(this.produto!=null)
      {
        this.base64Imagem = this.produto.imagemBase64;
        this.nomeProduto = this.produto.descricaoProduto;
        this.valorProduto = this.produto.precoVenda;

        const somaParcelas = this.valorProduto/6;
        this.qtdParcelas = `6 x ${somaParcelas.toFixed(2)} R$`;
      }
  }
}

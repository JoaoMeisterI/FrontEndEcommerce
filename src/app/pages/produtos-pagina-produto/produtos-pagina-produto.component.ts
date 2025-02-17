import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { PaginaProdutoComponent } from "../../componentes/pagina-produto/pagina-produto.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produtos-pagina-produto',
  standalone: true,
  imports: [PaginaProdutoComponent,CommonModule],
  templateUrl: './produtos-pagina-produto.component.html',
  styleUrl: './produtos-pagina-produto.component.css'
})
export class ProdutosPaginaProdutoComponent implements OnInit {

  idProduto!:number

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(parametro => {
      this.idProduto = parametro['id'];
      console.log(this.idProduto)
    })
  }

}

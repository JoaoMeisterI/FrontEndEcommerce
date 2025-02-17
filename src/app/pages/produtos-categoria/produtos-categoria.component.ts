import { Component, OnInit } from '@angular/core';
import { categoriasComponent } from "../../componentes/categorias/categorias.component";
import { ActivatedRoute, Route } from '@angular/router';


@Component({
  selector: 'app-produtos-categoria',
  standalone: true,
  imports: [categoriasComponent],
  templateUrl: './produtos-categoria.component.html',
  styleUrl: './produtos-categoria.component.css'
})
export class ProdutosCategoriaComponent implements OnInit {

  categoriaPagina!:string

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(parametro => {
      this.categoriaPagina = parametro['categoria'];
    })
  }



}


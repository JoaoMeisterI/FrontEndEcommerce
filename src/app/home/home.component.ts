import { Component } from '@angular/core';
import { HeaderComponent } from "../componentes/header/header.component";
import { PaperMidiaComponent } from "../componentes/paper-midia/paper-midia.component";
import { BlocoDemonstrativoComponent } from "../componentes/bloco-demonstrativo/bloco-demonstrativo.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, PaperMidiaComponent, BlocoDemonstrativoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

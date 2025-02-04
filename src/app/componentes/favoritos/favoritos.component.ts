import { Component } from '@angular/core';
import { DropdownComponent } from "../utils/dropdown/dropdown.component";
import { CardComponent } from "../utils/card/card.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'favoritos',
  standalone: true,
  imports: [DropdownComponent, CardComponent, HeaderComponent],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.scss'
})
export class FavoritosComponent {

}

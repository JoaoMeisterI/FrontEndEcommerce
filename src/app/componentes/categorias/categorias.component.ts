import { Component,Input,OnChanges,OnInit, ViewChild,ElementRef} from '@angular/core';
import { CardComponent } from "../utils/card/card.component";
import { Produto } from '../../models/Produto';
import { ProdutoService } from '../../services/Produto/produto.service';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';



@Component({
  selector: 'categorias-app',
  standalone: true,
  imports: [CardComponent, CommonModule, ModalComponent,MatDialogModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss'
})
export class categoriasComponent implements OnChanges {

    constructor(private produtoService:ProdutoService,public matDialog:MatDialog){}

    @Input() TitlePage!:string;
    @ViewChild('modal') modal!:ElementRef


    produtos:Produto[] = []
    produtoGeral:Produto[] = []
    modalAberto = false;

    async ngOnChanges(): Promise<void>
    {
        await this.GetProdutoByCategoria()
    }

    async GetProdutoByCategoria() {

      const data = await firstValueFrom(this.produtoService.GetProdutoByCategoria(this.TitlePage));
      this.produtos = data.dados.filter(produto => produto.imagemBase64.length > 0)
      this.produtoGeral = this.produtos;
    }

    openModalFiltros() {
      this.matDialog.open(ModalComponent,{
        width:'600px',
        height: '400px',
      })
    }



}




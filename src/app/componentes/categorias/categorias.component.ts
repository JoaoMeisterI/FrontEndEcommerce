import {
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CardComponent } from '../utils/card/card.component';
import { Produto } from '../../models/Produto';
import { ProdutoService } from '../../services/Produto/produto.service';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'categorias-app',
  standalone: true,
  imports: [CardComponent, CommonModule, ModalComponent, MatDialogModule, HeaderComponent],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss',
})
export class categoriasComponent implements OnChanges {
  constructor(
    private produtoService: ProdutoService,
    public matDialog: MatDialog
  ) {}

  @Input() TitlePage!: string;
  @ViewChild('modal') modal!: ElementRef;

  produtos: Produto[] = [];
  produtoGeral: Produto[] = [];
  numeracoesDisponiveis = new Set<string>();
  coresDisponiveis = new Set<string>();
  tiposProdutosDisponiveis = new Set<string>();

  async ngOnChanges(): Promise<void> {
    await this.GetProdutoByCategoria();
    await this.FiltraCores();
    await this.FiltraTamanhos();
    await this.FiltraTiposProduto();
  }

  async GetProdutoByCategoria() {
    const data = await firstValueFrom(
      this.produtoService.GetProdutoByCategoria(this.TitlePage)
    );
    this.produtos = data.dados.filter(
      (produto) => produto.imagemBase64.length > 0
    );
    this.produtoGeral = this.produtos;
  }

  async FiltraTiposProduto() {
    this.produtoGeral.forEach((produto) => {
      this.tiposProdutosDisponiveis.add(produto.categoriaProduto);
    });
  }
  async FiltraTamanhos() {
    this.produtoGeral.forEach((produto) => {
      this.numeracoesDisponiveis.add(produto.tamanho);
    });
  }
  async FiltraCores() {
    this.produtoGeral.forEach((produto) => {
      this.coresDisponiveis.add(produto.cor);
    });
  }

  openModalFiltros() {
    const dialogref = this.matDialog.open(ModalComponent, {
      width: '600px',
      height: '400px',
      data: {
        cores: Array.from(this.coresDisponiveis),
        tamanhos: Array.from(this.numeracoesDisponiveis),
        tipos: Array.from(this.tiposProdutosDisponiveis),
      },
    });
    dialogref.afterClosed().subscribe((result) => {

      const cores: string[] = result.coresSelecionadas;
      const tamanhos: string[] = result.numerosSelecionados;
      const tiposProduto: string[] = result.tiposSelecionadas;
      const setProdutos = new Set<Produto>

      this.produtoGeral.forEach((produto) => {

        const validaFiltroCor = cores.length === 0 || cores.includes(produto.cor);
        const validaFiltroNumeracao = tamanhos.length === 0 || tamanhos.includes(produto.tamanho);

        if(validaFiltroCor && validaFiltroNumeracao)
        {
          setProdutos.add(produto)
        }

      });

      this.produtos = Array.from(setProdutos);

    });
  }
}

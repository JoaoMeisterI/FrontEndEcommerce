import { Component, EventEmitter,Input,OnChanges,OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Produto } from '../../models/Produto';
import { RouterLink } from '@angular/router';
import { ProdutoService } from '../../services/Produto/produto.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Route } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto-form-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule,
    FormsModule,
    CommonModule,
    
  ],
  templateUrl: './produto-form-cadastro.component.html',
  styleUrl: './produto-form-cadastro.component.css'
})
export class ProdutoFormCadastroComponent implements OnInit {
  //Enviando esse formulário para o campo de cadastro
  @Output() aoEnviar = new EventEmitter<Produto>();

  //Para Receber algo você declara o input ao inves do output
  produtoDados : Produto | null = null;


  produtoForm!:FormGroup


  constructor(private produtoService : ProdutoService, private router: Router,private route: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {

    const idProduto = Number(this.route.snapshot.paramMap.get('id'));

    if (idProduto!=0)
    {
        await this.carregaInformacoesProduto(idProduto)
    }
    
    console.log("2 ")
    console.log(this.produtoDados)

   this.initForm();
  }
  
  enviar()
  {
    if (this.produtoForm.valid) {
      this.aoEnviar.emit(this.produtoForm.getRawValue());
    } else {
      console.error('Formulário inválido:', this.produtoForm.errors);
    }
  }

  async carregaInformacoesProduto(idProduto: number): Promise<void> {
    try 
    {
      const data = await firstValueFrom(this.produtoService.GetProdutoById(idProduto));
      this.produtoDados = data.dados;;
      console.log(1)
    } 
    catch (error) 
    {
      console.error('Erro ao carregar produto:', error);
    }
  }

  initForm(): void {
    this.produtoForm = new FormGroup({
      id: new FormControl(this.produtoDados ? this.produtoDados.id : 0),
      cor: new FormControl(this.produtoDados ? this.produtoDados.cor : '', [Validators.required]),
      precoPago: new FormControl(this.produtoDados ? this.produtoDados.precoPago : '', [Validators.required]),
      precoVenda: new FormControl(this.produtoDados ? this.produtoDados.precoVenda : '', [Validators.required]),
      tamanho: new FormControl(this.produtoDados ? this.produtoDados.tamanho : '', [Validators.required]),
      quantidadeEstoque: new FormControl(this.produtoDados ? this.produtoDados.quantidadeEstoque : '', [Validators.required]),
       imagem: new FormControl(
        this.produtoDados && this.produtoDados.imagem && this.produtoDados.imagem.length > 0 
        ? this.produtoDados.imagem 
        : new Uint8Array() // Valor padrão caso a imagem esteja vazia ou não exista
      ),
      categoriaProduto: new FormControl(this.produtoDados ? this.produtoDados.categoriaProduto : '', [Validators.required]),
      condicaoProduto: new FormControl(this.produtoDados ? this.produtoDados.condicaoProduto : '', [Validators.required]),
    });
  }

}





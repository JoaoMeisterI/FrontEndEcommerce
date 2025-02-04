import { Component } from '@angular/core';
import { ProdutoService } from '../../../services/Produto/produto.service';
import { Router } from '@angular/router';
import { Produto } from '../../../models/Produto';
import { ProdutoFormCadastroComponent } from "../../../componentes/produto-form-cadastro/produto-form-cadastro.component";

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [ProdutoFormCadastroComponent],
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css'] // Correção aqui
})
export class CadastroProdutoComponent {

  constructor(private produtoService: ProdutoService, private router: Router) {}

  async createProduto(produto: Produto) {
    const imageInput = document.querySelector<HTMLInputElement>('#imageInput');
    const file = imageInput?.files ? imageInput.files[0] : null;

    if (file) {
      console.log("Arquivo encontrado.");
      const reader = new FileReader();

      //Só ocorre depois que o
      reader.onload = (event) => {
        if (event.target?.result) {
          console.log("Leitura do arquivo concluída.");
          const arrayBuffer = event.target.result as ArrayBuffer;
          const base64String = this.arrayBufferToBase64(arrayBuffer);

          produto.imagem = base64String; 
          this.sendProduto(produto);
        }
      };

      // inicia por ele
      reader.readAsArrayBuffer(file);
    } 
    else 
    {
      console.log("Nenhum arquivo selecionado.");
      this.sendProduto(produto);
    }
  }

  private sendProduto(produto: Produto) {
    this.produtoService.CreateProduto(produto).subscribe((data) => {
      console.log("Produto criado com sucesso!");
      this.router.navigate(['/']);
    });
  }
  private arrayBufferToBase64(buffer: ArrayBuffer): string {
    const uint8Array = new Uint8Array(buffer);
    let binary = '';
    uint8Array.forEach((byte) => {
      binary += String.fromCharCode(byte);
    });
    return window.btoa(binary); 
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Produto } from '../../models/Produto';
import { Response } from '../../models/Response';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService
{

  private apiUrl = `${environment.ApiUrl}Produto`

  constructor(private http:HttpClient) {}

  GetProdutosAll(): Observable<Response<Produto[]>>
  {
    return this.http.get<Response<Produto[]>>(this.apiUrl);
  }

  GetCategoriasProduto(): Observable<Response<string[]>>
  {
    return this.http.get<Response<string[]>>(`${this.apiUrl}/categorias`);
  }

  GetProdutoByCategoria(categoria:string): Observable<Response<Produto[]>>
  {
    return this.http.get<Response<Produto[]>>(`${this.apiUrl}/produto/${categoria}`);
  }

  GetProdutoById(id:number) : Observable<Response<Produto>>
  {
    return this.http.get<Response<Produto>>(`${this.apiUrl}/${id}`);
  }

  CreateProduto(produto : Produto) : Observable<Response<Produto[]>>
  {
    return this.http.post<Response<Produto[]>>(`${this.apiUrl}`,produto);
  }

  UpdateProduto(produto : Produto) : Observable<Response<Produto[]>>
  {
    return this.http.put<Response<Produto[]>>(`${this.apiUrl}`, produto);
  }

  DeleteProduto(id: number) : Observable<Response<Produto[]>>
  {
    return this.http.delete<Response<Produto[]>>(`${this.apiUrl}?id=${id}`);
  }

}

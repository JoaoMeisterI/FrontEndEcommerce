import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Response } from '../../models/Response';
import { Carrinho } from '../../models/Carrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private apiUrl = `${environment.ApiUrl}Carrinho`

  constructor(private http:HttpClient) { }

  GetCarrinhoUsuario(): Observable<Response<Carrinho>>
  {
    return this.http.get<Response<Carrinho>>(`${this.apiUrl}/carrinho`);
  }

}

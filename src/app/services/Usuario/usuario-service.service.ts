import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Usuario } from '../../models/Usuario';
import { Response } from '../../models/Response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService 
{

  private apiUrl = `${environment.ApiUrl}Usuario`

  constructor(private http: HttpClient) {}

  GetUsuariosAll(): Observable<Response<Usuario[]>> 
  {
    return this.http.get<Response<Usuario[]>>(this.apiUrl);
  }
  
  GetUsuarioById(id: number): Observable<Response<Usuario>>
  {
    return this.http.get<Response<Usuario>>(`${this.apiUrl}/${id}`);
  }

  CreateUsuario(usuario: Usuario): Observable<Response<Usuario[]>> 
  {
    return this.http.post<Response<Usuario[]>>(`${this.apiUrl}`, usuario);
  }

  UpdateUsuario(usuario: Usuario): Observable<Response<Usuario[]>> 
  {
    return this.http.put<Response<Usuario[]>>(`${this.apiUrl}`, usuario);
  }

  DeleteUsuario(id: number): Observable<Response<Usuario[]>>
  {
    return this.http.delete<Response<Usuario[]>>(`${this.apiUrl}?id=${id}`);
  }

}
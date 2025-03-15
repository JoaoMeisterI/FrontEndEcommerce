import { Usuario } from './../../models/Usuario';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  private usuarioSubject = new BehaviorSubject<Usuario | null>(null);
  usuario$ : Observable<Usuario | null> = this.usuarioSubject.asObservable();

  constructor() {
    this.TryLoadUser()
  }

  SetUsuario(usuario:Usuario)
  {
    this.usuarioSubject.next(usuario);
    localStorage.setItem('usuario',JSON.stringify(usuario));
  }

  GetUsuario()
  {
    return this.usuarioSubject.value;
  }


  LogoutUser()
  {
    this.usuarioSubject.next(null);
    localStorage.removeItem('usuario');
  }

  private TryLoadUser() {
    const usuarioSalvo = localStorage.getItem('usuario');
    if(usuarioSalvo)
    {
      this.usuarioSubject.next(JSON.parse(usuarioSalvo));
    }
  }

}

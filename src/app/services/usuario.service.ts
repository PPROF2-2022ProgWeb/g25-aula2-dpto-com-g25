import { Injectable } from '@angular/core';
import { usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  lista_usuario: usuario[] = [
    {usuario: "mari", nombre: 'matias', apellido: "lopez", contrasena:123456 },
    {usuario: "maxi", nombre: 'marcos', apellido: "lopez", contrasena:123456 },
    {usuario: "mati", nombre: 'matias', apellido: "lopez", contrasena:123456 },
    {usuario: "mati", nombre: 'matias', apellido: "lopez", contrasena:123456 },
    {usuario: "mati", nombre: 'matias', apellido: "perez", contrasena:123456 },
    {usuario: "mati", nombre: 'matias', apellido: "lopez", contrasena:123456 },
    {usuario: "mati", nombre: 'matias', apellido: "lopez", contrasena:123456 },
  
  ];
  constructor() { }

  getUsuario(){
    return this.lista_usuario.slice();
  }
}

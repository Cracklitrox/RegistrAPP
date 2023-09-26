import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private correoInstitucional: string = '';
  private contrasena: string = '';

  setCorreoInstitucional(correo: string) {
    this.correoInstitucional = correo;
  }

  getCorreoInstitucional() {
    if (this.correoInstitucional.includes('@duocuc.cl')) {
      const parts = this.correoInstitucional.split('@duocuc.cl');
      return parts[0];
    } else {
      return this.correoInstitucional;
    }
  }

  setContrasena(contrasena: string) {
    this.contrasena = contrasena;
    localStorage.setItem('contrasena', contrasena); // Almacenar la contraseña en el localStorage
  }

  getContrasena() {
    if (this.contrasena) {
      return this.contrasena;
    } else {
      // Intentar recuperar la contraseña del localStorage
      const storedContrasena = localStorage.getItem('contrasena');
      if (storedContrasena) {
        this.contrasena = storedContrasena;
      }
      return this.contrasena;
    }
  }

  constructor() { }
}
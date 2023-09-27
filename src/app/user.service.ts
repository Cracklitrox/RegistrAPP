import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private correoInstitucional: string = '';
  private contrasena: string = '';

  // Funcion para guardar el correo institucional en el localStorage
  setCorreoInstitucional(correo: string) {
    this.correoInstitucional = correo;
    localStorage.setItem('Correo Electronico: ', this.correoInstitucional)
  }

  // Funcion para obtener solo el nombre del correo institucional antes del '@duocuc.cl'
  getNombreCorreoInstitucional() {
    if (this.correoInstitucional.includes('@duocuc.cl')) {
      const parts = this.correoInstitucional.split('@duocuc.cl');
      return parts[0];
    } else {
      return this.correoInstitucional;
    }
  }

  // Funcion para guardar la contraseña del usuario en el localStorage
  setContrasena(contrasena: string) {
    this.contrasena = contrasena;
    localStorage.setItem('Contraseña: ', this.contrasena);
  }

  // Funcion para obtener la contraseña del usuario, para la validacion.
  getContrasena() {
    if (this.contrasena) {
      return this.contrasena;
    } else {
      // Recuperar la contraseña del localStorage
      const storedContrasena = localStorage.getItem('contrasena');
      if (storedContrasena) {
        this.contrasena = storedContrasena;
      }
      return this.contrasena;
    }
  }
  constructor() { }
}
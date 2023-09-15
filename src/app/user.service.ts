import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private correoInstitucional: string = '';

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

  constructor() { }
}
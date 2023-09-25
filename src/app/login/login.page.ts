import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {

  constructor(
    private platform: Platform,
    private alertController: AlertController,
    private router: Router
  ) {
    this.metodoHoraActual();
  }

  public mensajeHoraActual: string = '';

  @ViewChild('loginForm') loginForm!: NgForm;

  correoInstitucional: string = '';
  contrasena: string = '';

  metodoHoraActual() {
    const horaActual = new Date().getHours();

    if (horaActual >= 6 && horaActual < 12) {
      this.mensajeHoraActual = 'Buenos días Usuario';
    } else if (horaActual >= 12 && horaActual < 18) {
      this.mensajeHoraActual = 'Buenas tardes Usuario';
    } else {
      this.mensajeHoraActual = 'Buenas noches Usuario';
    }
  }

  async onSubmit() {
    const correoRegex = /^[a-zA-Z0-9._-]+@duocuc\.cl$/;
    if (this.correoInstitucional.length < 4 || !correoRegex.test(this.correoInstitucional)) {
      this.mostrarAlerta('Error', 'El correo institucional debe ser válido y debe terminar con "@duocuc.cl".');
      return;
    }

    if (this.contrasena.length < 8 || this.contrasena.length > 30 || !/^[a-zA-Z0-9!@#$%^&*()-_+=<>?]+$/.test(this.contrasena)) {
      this.mostrarAlerta('Error', 'La contraseña debe tener entre 8 y 30 caracteres.');
      return;
    }
    this.router.navigate(['/waiting-page-welcome-user']);
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  redirigirOlvidoContrasena() {
    this.router.navigate(['/password-reset']);
  }
}
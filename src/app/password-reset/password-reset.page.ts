import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage {

  constructor(
    private platform: Platform,
    private alertController: AlertController,
    private router: Router
  ) {
    this.imagenFooter = '';
    this.detectarTema();
  }

  public imagenFooter: string;

  @ViewChild('passwordResetForm') passwordResetFrom!: NgForm;

  correoInstitucional: string = '';

  detectarTema() {
    this.platform.ready().then(() => {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.imagenFooter = prefersDark ? 'assets/images/logo_footer.png' : 'assets/images/dark/logo_footer.png';
    })
  }

  async formulario() {
    const correoRegex = /^[a-zA-Z0-9._-]+@duocuc\.cl$/;
    if (this.correoInstitucional.length < 4 || !correoRegex.test(this.correoInstitucional)) {
      this.mostrarAlerta('Error', 'El correo institucional debe ser válido y debe terminar con "@duocuc.cl".');
      return;
    }

    this.mostrarAlerta('Exito', 'Se ha enviado un link para restablecer su contraseña');
    this.router.navigate(['/login']);
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}
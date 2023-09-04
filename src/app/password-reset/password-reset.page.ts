import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage {
  nombreUsuario: string = '';
  nombreUsuarioValido: boolean = false;

  constructor(private alertController: AlertController) {}

  validarEntrada() {
    // Agregar validaciones como (a.ejemplo, e.ejemplo, c.ejemplo, etc) y (a.ejemplo@duocuc.cl, e.ejemplo@duocuc.cl, c.ejemplo@duocuc.cl, etc)
    // En caso de que el 'nombreUsuarioValido' sea true, validar la funcion. En caso contrario, mostrar mensaje de error.
  }

  async recuperarContrasena() {
    if (this.nombreUsuarioValido) {
      // En la medida de lo posible, mandar mensaje de correo asimilando que funciona.

      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Se ha enviado un link para restablecer su contraseña a su correo institucional.',
        buttons: ['OK'],
      });

      await alert.present();
    } else {
      // Muestra una alerta de error
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Ingrese un nombre de usuario o correo válido.',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
}
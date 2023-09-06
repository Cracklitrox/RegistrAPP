import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

// Validador personalizado para el correo institucional
function correoInstitucionalValidator(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value && !control.value.endsWith('@duocuc.cl')) {
    return { correoInvalido: true };
  }
  return null;
}

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {

  formularioReestablecerContrasena: FormGroup; 

  constructor(public fb: FormBuilder, public alertController: AlertController, private navCtrl: NavController) {
    this.formularioReestablecerContrasena = this.fb.group({
      'correo': new FormControl('', [Validators.required, correoInstitucionalValidator])
    });
  }

  pagina_login() {
    this.navCtrl.navigateForward('login-page');
  }
  ngOnInit() {
  }

  async recuperarContrasena() {
    const f = this.formularioReestablecerContrasena.value;

    if (this.formularioReestablecerContrasena.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos correctamente',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }

    // Continuar con el proceso de recuperación de contraseña aquí
    const alertGreat = await this.alertController.create({
      header: 'Link enviado',
      message: 'Se ha enviado a tu correo institucional los pasos a seguir para reestablecer tu contraseña',
      buttons: ['Ok']
    });

    await alertGreat.present();
    this.pagina_login();
  }
}
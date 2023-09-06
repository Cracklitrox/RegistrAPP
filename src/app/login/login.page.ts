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

// Validador personalizado para la contraseña
function contrasenaValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const minLength = 5;
  const maxLength = 20;
  const value = control.value || '';
  
  // Verifica que la contraseña contenga solo letras, números y el carácter '@'
  const pattern = /^[a-zA-Z0-9@]+$/;

  if (value.length < minLength || value.length > maxLength || !pattern.test(value)) {
    return { contrasenaInvalida: true };
  }
  return null;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, private navCtrl: NavController) {
    this.formularioLogin = this.fb.group({
      'correo': new FormControl('', [Validators.required, correoInstitucionalValidator]),
      'password': new FormControl('', [Validators.required, contrasenaValidator])
    });
  }

  paginaQR() {
    this.navCtrl.navigateForward('/assistance-page');
  }
  ngOnInit() {
  }

  async Ingresar() {
    const f = this.formularioLogin.value;

    if (this.formularioLogin.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos correctamente',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }
    this.paginaQR();
    // Continuar con el procesamiento de inicio de sesión
  }
}
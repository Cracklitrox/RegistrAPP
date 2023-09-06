import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  
  constructor(public fb: FormBuilder,
    public alertController: AlertController) {
    this.formularioLogin = this.fb.group ({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    });
   }

  ngOnInit() {
  }

  async Ingresar(){
    var f = this.formularioLogin.value;

    if (this.formularioLogin.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }
    var usuario = {
      nombre: f.nombre,
      password: f.password
  }

  }
}

import { Component, OnInit } from '@angular/core';
import { BdService } from '../bd.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

   username: string='';
   password: string='';

  constructor( private BdService : BdService, private alertController : AlertController, private router : Router) {

   }
   async registrar(){
    const correoInstitucional: string = this.username.trim();
    const contrasena: string = this.password.trim();


    const correoRegex = /^[a-zA-Z0-9._-]+@duocuc\.cl$/;
    if (correoInstitucional.length < 4 || !correoRegex.test(correoInstitucional)) {
      this.mostrarAlerta('Error', 'El correo institucional debe ser válido y debe terminar con "@duocuc.cl".');
      return;
    }

    if (contrasena.length < 8 || contrasena.length > 30 || !/^[a-zA-Z0-9!@#$%^&*()-_+=<>?]+$/.test(contrasena)) {
      this.mostrarAlerta('Error', 'La contraseña debe tener entre 8 y 30 caracteres.');
      return;
    }


    const usuarioExiste= await this.BdService.get(correoInstitucional);
    if (usuarioExiste) {
      this.mostrarAlerta ('Error', 'Este correo ya existe');
      return;
    }

    this.BdService.set (correoInstitucional,contrasena);
    this.router.navigate (['/login']);
    

   }

   async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  ngOnInit() {
  }

}

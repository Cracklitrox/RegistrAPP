import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { RegistrAPPService } from '../registr-app.service';
import { Usuario } from '../interface/Modelos';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  usuario: Usuario = {
    correo: '',
    contrasena: ''
  }

  constructor(
    private platform: Platform,
    private alertController: AlertController,
    private router: Router,
    private userService: UserService,
    private registr: RegistrAPPService,
  ) {
    this.imagenFooter = '';
    this.detectarTema();
  }

  public imagenFooter: string;
  public mensajeHoraActual: string = '';

  @ViewChild('loginForm') loginForm!: NgForm;

  detectarTema() {
    this.platform.ready().then(() => {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.imagenFooter = prefersDark ? 'assets/images/logo_footer.png' : 'assets/images/dark/logo_footer.png';
      this.metodoHoraActual();
    });
  }
  ngOnInit(){
    console.log('On init');
  }

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
    if (this.usuario.correo.length < 4 || !correoRegex.test(this.usuario.correo)) {
      this.mostrarAlerta('Error', 'El correo institucional debe ser válido y debe terminar con "@duocuc.cl".');
      return;
    }

    if (this.usuario.contrasena.length < 8 || this.usuario.contrasena.length > 30 || !/^[a-zA-Z0-9!@#$%^&*()-_+=<>?]+$/.test(this.usuario.contrasena)) {
      this.mostrarAlerta('Error', 'La contraseña debe tener entre 8 y 30 caracteres.');
      return;
    }
    this.logueoUsuario();
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

  logueoUsuario() {
    console.log("Buscando ID usuario");
    this.registr.verificarExistenciaAlumno(this.usuario.correo, this.usuario.contrasena).subscribe((existe) => {
      if (existe) {
        this.router.navigate(['/waiting-page-welcome-user']);
        localStorage.setItem('ingresado', 'true');
        this.userService.setCorreoInstitucional(this.usuario.correo);
        this.userService.setContrasena(this.usuario.contrasena);
        console.log("Usuario encontrado: " + this.usuario.correo + "\rContraseña encontrada: " + this.usuario.contrasena);
      } else {
        this.mostrarAlerta('Error', 'No se ha encontrado a ningún usuario');
        return;
      }
    }, (error) => {
      console.log("Error en logueoUsuario()");
    });
  }
}
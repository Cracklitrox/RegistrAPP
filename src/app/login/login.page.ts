import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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

  private accounts: any [] =[
    {
      id: 1,
      run: "21.196.666",
      dv_run: "1",
      pnombre: "Carlos",
      snombre: "Jared",
      appaterno: "Gacitua",
      apmaterno: "Villarroel",
      contrasena: "admin1234",
      correo_institucional: "c.gacitua@duocuc.cl",
      fecha_nacimiento: "2002-12-21",
      telefono: 12345678,
      direccion: "hogar 1234",
      qr_credencial: "/assets/images/qr/qr_alumno1.png",
      foto_portada: "/assets/images/usuarios/usuario_id1.png"
    },
    {
      id: 2,
      run: "19.748.288",
      dv_run: "k",
      pnombre: "Jose",
      snombre:  "Nose",
      appaterno: "Alcachofa",
      apmaterno: "Afocjcala",
      contrasena: "jose4321",
      correo_institucional: "jo.alcachofa@duocuc.cl",
      fecha_nacimiento: "2000-04-02",
      telefono: 87654321,
      direccion: "hogar 4321",
      qr_credencial: "/assets/images/qr/qr_alumno2.png",
      foto_portada: "/assets/images/usuarios/usuario_id2.png"
    },
    {
      id: 3,
      run: "17.218.238",
      dv_run: "4",
      pnombre: "Francisco",
      snombre:  "Javier",
      appaterno: "Calfun",
      apmaterno: "Gutierrez",
      contrasena: "profesor123",
      correo_institucional: "f.calfun@profesor.duoc.cl",
      fecha_nacimiento: "1983-04-02",
      telefono: 912654879,
      direccion: "hogar 4321",
      foto_qr: "/assets/images/informatica/programacion_movil.png",
    },
    {
      id: 4,
      run: "16.218.238",
      dv_run: "2",
      pnombre: "German",
      snombre:  "Gabriel",
      appaterno: "Barrientos",
      apmaterno: "Tereucan",
      contrasena: "profesor123",
      correo_institucional: "g.barrientos@profesor.duoc.cl",
      fecha_nacimiento: "1980-04-02",
      telefono: 921654824,
      direccion: "hogar 4321",
      foto_qr: "/assets/images/informatica/arquitectura.png",
    },
    {
      id: 5,
      run: "15.123.432",
      dv_run: "9",
      pnombre: "Yessica",
      snombre:  "Betzave",
      appaterno: "Bolivar",
      apmaterno: "Romero",
      contrasena: "profesor123",
      correo_institucional: "y.bolivar@profesor.duoc.cl",
      fecha_nacimiento: "1980-04-02",
      telefono: 954652312,
      direccion: "hogar 4321",
      foto_qr: "/assets/images/informatica/calidad_software.png",
    },
    {
      id: 6,
      run: "18.932.932",
      dv_run: "k",
      pnombre: "Pablo",
      snombre:  "Cesar",
      appaterno: "Proinick",
      apmaterno: "Mansilla",
      contrasena: "profesor123",
      correo_institucional: "p.proinick@profesor.duoc.cl",
      fecha_nacimiento: "1980-04-02",
      telefono: 954652312,
      direccion: "hogar 4321",
      foto_qr: "/assets/images/informatica/ingles_intermedio.png",
    },
    {
      id: 7,
      run: "12.234.823",
      dv_run: "4",
      pnombre: "Victor",
      snombre:  "Alejandro",
      appaterno: "Aguero",
      apmaterno: "Soto",
      contrasena: "profesor123",
      correo_institucional: "v.aguero@profesor.duoc.cl",
      fecha_nacimiento: "1980-04-02",
      telefono: 954652312,
      direccion: "hogar 4321",
      foto_qr: "/assets/images/informatica/estadistica.png",
    },
    {
      id: 8,
      run: "12.432.243",
      dv_run: "7",
      pnombre: "Boris",
      snombre:  "Felipe",
      appaterno: "Sepulveda",
      apmaterno: "Millar",
      contrasena: "profesor123",
      correo_institucional: "b.sepulveda@profesor.duoc.cl",
      fecha_nacimiento: "1980-04-02",
      telefono: 954652312,
      direccion: "hogar 4321",
      foto_qr: "/assets/images/informatica/etica.png",
    }
  ]

  constructor(
    private platform: Platform,
    private alertController: AlertController,
    private router: Router,
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
    const correoRegex = /^[a-zA-Z0-9._-]+@(duocuc|profesor\.duoc)\.cl$/;
    if (this.usuario.correo.length < 4 || !correoRegex.test(this.usuario.correo)) {
      this.mostrarAlerta('Error', 'El correo institucional debe ser válido y debe terminar con "@duocuc.cl" o "@profesor.duoc.cl".');
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
    const usuarioEncontrado = this.obtenerUsuarioPorCredenciales(this.usuario.correo, this.usuario.contrasena);
    if (usuarioEncontrado) {
      // Guardar los detalles del usuario en localStorage
      localStorage.setItem('usuarioDetalles', JSON.stringify(usuarioEncontrado));
      if (usuarioEncontrado.correo_institucional.endsWith('@profesor.duoc.cl')) {
        // Si el usuario es un profesor, redirigir a 'teacher-page'
        this.router.navigate(['/teacher-page']);
      } else {
        // Si no, redirigir a 'waiting-page-welcome-user'
        this.router.navigate(['/waiting-page-welcome-user']);
      }
      localStorage.setItem('ingresado', 'true');
      console.log("Usuario encontrado: " + this.usuario.correo + "\rContraseña encontrada: " + this.usuario.contrasena);
    } else {  
      this.mostrarAlerta('Error', 'No se ha encontrado a ningún usuario');
    }
  }  

  obtenerUsuarioPorCredenciales(correo: string, contrasena: string): any | null {
    return this.accounts.find(
      (user) => user.correo_institucional === correo && user.contrasena === contrasena
    );
  }
}
import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../interface/Modelos';
import { RegistrAPPService } from '../registr-app.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage {
  usuario: Usuario = {
    correo: '',
    contrasena: ''
  }
  nueva_contrasena: string = '';
  confirmar_contrasena: string = '';

  constructor(
    private platform: Platform,
    private alertController: AlertController,
    private router: Router,
    private registr: RegistrAPPService
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
    if (this.usuario.correo.length < 4 || !correoRegex.test(this.usuario.correo)) {
      this.mostrarAlerta('Error', 'El correo institucional debe ser válido y debe terminar con "@duocuc.cl".');
      return;
    }

    this.validarCorreo();
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  validarCorreo() {
    console.log("Buscando correo del usuario");
    this.registr.obtenerAlumnos().subscribe((alumnos) => {
      const alumnoEncontrado = alumnos.find(alumno => alumno.correo_institucional === this.usuario.correo);
      if (alumnoEncontrado) {
        const nuevaContrasena = this.nueva_contrasena;
        const confirmarContrasena = this.confirmar_contrasena;
  
        if (nuevaContrasena !== confirmarContrasena) {
          this.mostrarAlerta('Error', 'Las contraseñas no coinciden. Por favor, asegúrate de que las contraseñas coincidan.');
          return;
        }
  
        // Llamar a la función para actualizar la contraseña del alumno
        this.registr.actualizarContrasenaAlumno(alumnoEncontrado.id, nuevaContrasena).subscribe(() => {
          this.mostrarAlerta('Éxito', 'Se ha validado la nueva contraseña y se ha actualizado correctamente.');
          console.log(nuevaContrasena)
          this.router.navigate(['/login']);
        }, (error) => {
          console.log("Error al actualizar la contraseña del alumno", error);
        });
  
      } else {
        this.mostrarAlerta('Error', 'No se ha encontrado el correo ingresado, inténtelo nuevamente.');
        return;
      }
    }, (error) => {
      console.log("Error en validarCorreo()", error);
    });
  }
}
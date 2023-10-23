import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {
  themeToggle = false;

  constructor(public alertaControlador: AlertController, private router: Router) {}

  ngOnInit() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.themeToggle = prefersDark.matches;
    // Apply the initial theme setting
    // this.applyThemePreference(); // Evitar aplicar el tema automáticamente al inicio
    prefersDark.addEventListener('change', (mediaQuery) => {
      this.themeToggle = mediaQuery.matches;
      this.applyThemePreference();
    });
  }

  applyThemePreference() {
    const isDark = this.themeToggle;
    document.body.classList.toggle('dark', isDark);
    this.adjustIcon(isDark);
  }

  toggleDarkTheme() {
    this.themeToggle = !this.themeToggle;
    this.applyThemePreference();
  }

  adjustIcon(isDark: boolean) {
    const icon = document.getElementById('toggle-icon');
    if (icon) {
      icon.setAttribute('name', isDark ? 'moon' : 'sunny');
    }
  }

  async mensajeAdvertencia() {
    const alerta = await this.alertaControlador.create({
      header: 'Salir',
      message: '¿Estás seguro de cerrar la sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secundary',
          handler: () => {
            console.log('El usuario ha cancelado la acción.');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('El usuario ha decidido cerrar la sesión. Redirigiendo a la página de inicio de sesión (login).');
            localStorage.clear();
            this.router.navigate(['/waiting-page-logout']);
          }
        }
      ]
    });

    await alerta.present();
  }
}
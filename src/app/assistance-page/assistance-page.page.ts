import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assistance-page',
  templateUrl: './assistance-page.page.html',
  styleUrls: ['./assistance-page.page.scss'],
})
export class AssistancePagePage implements OnInit {
  asistenciaRegistrada: boolean = false;
  horaDeRegistro: string = '';
  registros: { asignatura: string; horario: string; estado: string }[] = [];

  imagenes: string[] = ['assets/images/qr.png', 'assets/images/qr2.png', 'assets/images/qr3.png'];

  imagenActual: string = this.imagenes[0];

  constructor() {}

  ngOnInit() {}

  registrarAsistencia() {
    this.cambiarImagenAleatoria();
    this.asistenciaRegistrada = true;
    this.horaDeRegistro = this.obtenerHoraActual();

    let asignatura = '';
    switch (this.imagenActual) {
      case 'assets/images/qr.png':
        asignatura = 'Programacion movil';
        break;
      case 'assets/images/qr2.png':
        asignatura = 'Calidad de software';
        break;
      case 'assets/images/qr3.png':
        asignatura = 'Estadistica descriptiva';
        break;
    }

    this.registros.push({
      asignatura: asignatura,
      horario: '8:30 - 10:40 hrs.',
      estado: 'Registrado',
    });
  }

  obtenerHoraActual(): string {
    const ahora = new Date();
    const hora = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    return `${hora}:${minutos}`;
  }

  cambiarImagenAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * this.imagenes.length);
    this.imagenActual = this.imagenes[indiceAleatorio];
  }
}
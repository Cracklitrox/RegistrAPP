import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {
  diaActual: string = '';
  materias!: any[];

  constructor(private appComponent: AppComponent) {
    this.setDiaActual();
    this.setMaterias();
  }

  ngOnInit() {
  }

  setDiaActual() {
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const obtenerDiaActual = new Date().getDay();
    this.diaActual = diasSemana[obtenerDiaActual];
  }

  // La idea es sacar los atributos de las tablas según el día del alumno.
  setMaterias() {
    switch (this.diaActual) {
      case 'Sábado':
        this.materias = [];
        break;
      case 'Lunes':
        this.materias = [
          {
            titulo: 'Programación de Aplicaciones Móviles',
            porcentajeAsistencia: 100,
            profesor: 'Francisco Calfun',
            idClase: 'Y407',
            horarioClaseInicio: '8:31',
            horarioClaseFinal: '9:50',
          },
          {
            titulo: 'Ingles Intermedio',
            porcentajeAsistencia: 60,
            profesor: 'Pablo Proinick',
            idClase: 'Y411',
            horarioClaseInicio: '13:41',
            horarioClaseFinal: '14:20',
          },
          {
            titulo: 'Estadística Descriptiva',
            porcentajeAsistencia: 80,
            profesor: 'Victor Aguero',
            idClase: 'Y409',
            horarioClaseInicio: '15:11',
            horarioClaseFinal: '15:50',
          },
        ];
        break;
      case 'Martes':
        this.materias = [
          {
            titulo: 'Arquitectura',
            porcentajeAsistencia: 75,
            profesor: 'German Barrientos',
            idClase: 'Y409',
            horarioClaseInicio: '10:41',
            horarioClaseFinal: '11:20',
          },
          {
            titulo: 'Arquitectura',
            porcentajeAsistencia: 75,
            profesor: 'German Barrientos',
            idClase: 'Y409',
            horarioClaseInicio: '11:31',
            horarioClaseFinal: '12:10',
          },
          {
            titulo: 'Etica para el trabajo',
            porcentajeAsistencia: 100,
            profesor: 'Boris Sepulveda',
            idClase: 'Y403',
            horarioClaseInicio: '12:11',
            horarioClaseFinal: '12:50',
          },
          
          {
            titulo: 'Etica para el trabajo',
            porcentajeAsistencia: 100,
            profesor: 'Boris Sepulveda',
            idClase: 'Y403',
            horarioClaseInicio: '13:01',
            horarioClaseFinal: '13:40',
          },
        ];
        break;
      case 'Miércoles':
        this.materias = [
          {
            titulo: 'Programación de Aplicaciones Móviles',
            porcentajeAsistencia: 100,
            profesor: 'Francisco Calfun',
            idClase: 'Y407',
            horarioClaseInicio: '8:31',
            horarioClaseFinal: '9:50',
          },
          {
            titulo: 'Ingles Intermedio',
            porcentajeAsistencia: 60,
            profesor: 'Pablo Proinick',
            idClase: 'Y411',
            horarioClaseInicio: '13:41',
            horarioClaseFinal: '14:20',
          },
          {
            titulo: 'Estadística Descriptiva',
            porcentajeAsistencia: 80,
            profesor: 'Victor Aguero',
            idClase: 'Y409',
            horarioClaseInicio: '15:11',
            horarioClaseFinal: '15:50',
          },
        ];
        break;
      case 'Jueves':
        this.materias = [
          {
            titulo: 'Ingles Intermedio',
            porcentajeAsistencia: 68,
            profesor: 'Pablo Proinick',
            idClase: 'Y411',
            horarioClaseInicio: '10:01',
            horarioClaseFinal: '11:20',
          },
          {
            titulo: 'Ingles Intermedio',
            porcentajeAsistencia: 60,
            profesor: 'Pablo Proinick',
            idClase: 'Y411',
            horarioClaseInicio: '11:31',
            horarioClaseFinal: '12:10',
          },
          {
            titulo: 'Calidad de Software',
            porcentajeAsistencia: 80,
            profesor: 'Yessica Bolivar',
            idClase: 'Y407',
            horarioClaseInicio: '13:41',
            horarioClaseFinal: '14:20',
          },
          {
            titulo: 'Calidad de Software',
            porcentajeAsistencia: 80,
            profesor: 'Yessica Bolivar',
            idClase: 'Y407',
            horarioClaseInicio: '14:31',
            horarioClaseFinal: '15:10',
          },
          {
            titulo: 'Estadistica Descriptiva',
            porcentajeAsistencia: 100,
            profesor: 'Victor Aguero',
            idClase: 'Y490',
            horarioClaseInicio: '15:11',
            horarioClaseFinal: '15:50',
          },
          {
            titulo: 'Estadistica Descriptiva',
            porcentajeAsistencia: 100,
            profesor: 'Victor Aguero',
            idClase: 'Y490',
            horarioClaseInicio: '16:01',
            horarioClaseFinal: '16:40',
          },
        ];
        break;
      case 'Viernes':
        this.materias = [
          {
            titulo: 'Arquitectura',
            porcentajeAsistencia: 100,
            profesor: 'German Barrientos',
            idClase: 'Y407',
            horarioClaseInicio: '12:11',
            horarioClaseFinal: '12:50',
          },
          {
            titulo: 'Arquitectura',
            porcentajeAsistencia: 100,
            profesor: 'German Barrientos',
            idClase: 'Y407',
            horarioClaseInicio: '13:01',
            horarioClaseFinal: '14:20',
          },
        ];
        break;
      default:
        this.materias = [];
        break;
    }
    console.log(this.materias);
  }
}
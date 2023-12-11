import { Component, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { APIService } from '../api.service';
// import { BarcodeScanner, ScanResult, ScanOptions} from '@capacitor-community/barcode-scanner';
import { ToastController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { NavController } from '@ionic/angular';
import { IonMenu } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {
  @ViewChild(IonMenu) menu: IonMenu | undefined;
  diaActual: string = '';
  materias!: any[];
  clima: any[] = [];
  usuarioDetalles: any;
  imageSource: any;

  constructor(private appComponent: AppComponent, private APIService: APIService, private toastController: ToastController, private navCtrl: NavController, private router: Router) {
    this.setDiaActual();
    this.setMaterias();
    this.usuarioDetalles = JSON.parse(localStorage.getItem('usuarioDetalles') || '{}');
  }

  navigateToPage(page: string) {
    this.router.navigateByUrl(`/${page}`);
    if (this.menu && !this.menu.disabled) {
      this.menu.close();
    }
  }

  // async abrirCamaraQR() {
  //   const options: ScanOptions = {
  //     targetedFormats: [],
  //     cameraDirection: 'back'
  //   };
  
  //   try {
  //     // Comprueba los permisos de la cámara
  //     const permisos = await Camera.checkPermissions();
  //     if (permisos.camera === 'granted') {
  //       const resultado: ScanResult = await BarcodeScanner.startScan(options);
  
  //       if (!resultado.hasContent) {
  //         console.log('Escaneo cancelado');
  //       } else {
  //         console.log('Código QR escaneado:', resultado.content);
  //         await this.mostrarMensaje('Asistencia registrada');
  //       }
  //     } else {
  //       console.log('Permiso de cámara no concedido');
  //     }
  //   } catch (error) {
  //     console.error('Error al escanear el código QR:', error);
  //   }
  // }

  // async mostrarMensaje(mensaje: string) {
  //   const mensajeAlerta = await this.toastController.create({
  //     message: mensaje,
  //     duration: 2000,
  //     position: 'middle'
  //   });
  //   mensajeAlerta.present();
  // }

  ngOnInit() {
    this.LlamarApi()
  }

  LlamarApi() {
    this.APIService.ObtenerClima().subscribe((data: any) => {
      this.clima = data;
      console.log(this.clima)
    })
  }

  setDiaActual() {
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const obtenerDiaActual = new Date().getDay();
    this.diaActual = diasSemana[obtenerDiaActual];
  }

  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt,
      });

      if (image.dataUrl !== undefined) {
        this.imageSource = image.dataUrl;
      } else {
        // Maneja el caso en que image.dataUrl es undefined
        console.log('No se pudo obtener la imagen');
      }
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
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
        this.materias = [
          {
            titulo: 'Arquitectura',
            porcentajeAsistencia: 100,
            profesor: 'German Barrientos',
            idClase: 'Y407',
            horarioClaseInicio: '12:11',
            horarioClaseFinal: '12:50',
          }
        ];
        break;
    }
    console.log(this.materias);
  }
}
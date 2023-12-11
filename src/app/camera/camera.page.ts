import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage {

  constructor(private alerta: AlertController) { }

  public scanActive: boolean = false;
  public result: string | any = null;

  async checkPermission(): Promise<boolean> {
    try {
      const status = await BarcodeScanner.checkPermission({ force: true });

      if (status.granted) {
        BarcodeScanner.showBackground();
        return true;
      } else if (status.denied) {
        this.showAndStopScanner();
        await this.presentError('Se necesitan los permisos de la camara, vaya a la configuracion de la aplicacion y conceda los permisos necesarios.');
        return false;
      } else {
        this.showAndStopScanner();
        return false;
      }
    } catch (error) {
      this.showAndStopScanner();
      this.handleError("Error al conceder los permisos para la camara.");
      return false;
    }
  }

  async presentError(data: string) {
    const alert = await this.alerta.create({
      header: 'No se ha pidod escanear el codigo QR.',
      message: data,
      buttons: [{
        text: 'Ok',
        role: 'Ok'
      }]
    });
    await alert.present();
  }

  handleError(errorMessage: string) {
    console.error(errorMessage);
    this.presentError(errorMessage);
  }

  showAndStopScanner(ionContent?: Element | null) {
    if (ionContent) {
      ionContent.classList.remove('scanner-active');
    }
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  }

  stopScanner() {
    this.scanActive = false;
    this.showAndStopScanner();
  }  

  async startScanner() {
    try {
      const ionContent = document.querySelector('body');
      if (ionContent) {
        ionContent.classList.add('scanner-active');
        this.scanActive = true;
      }

      const allowed = await this.checkPermission();

      if (allowed) {
        BarcodeScanner.hideBackground();
        const result = await BarcodeScanner.startScan();

        if (result.hasContent) {
          const scannedData = result.content;

          if (result.hasContent) {
            this.result = result.content;
            this.scanActive = false;
            BarcodeScanner.hideBackground();
          }
        } else {
          this.showAndStopScanner(ionContent);
        }
      } else {
        this.showAndStopScanner(ionContent);
      }
    } catch (error) {
      this.handleError("No se pudo indentificar el codigo QR, intentelo nuevamente.")
    }
  }
}
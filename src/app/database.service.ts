import { Injectable } from '@angular/core';
import {SQLite, SQLiteObject} from '@awesome-cordova-plugins/sqlite'
import { Platform, ToastController } from '@ionic/angular';
import {BehaviorSubject, Observable } from 'rxjs';

/*
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  public database: SQLiteObject;
  tblNoticias:string = "CREATE TABLE IF NOT EXISTS noticia (id INTEGER PRIMARY KEY autoincrement,"
                      + "titulo VARCHAR(50) NOT NULL, texto TEXT NOT NULL);";

  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private SQLite:SQLite,
    private platform:Platform,
    public toastController: ToastController,
    ) {
      this.crearBD ();
     }


  crearBD() {
      this.platform.ready().then(() => {
        this.sqlite.create({
          name: 'noticias.db',
          location: 'default'
        }).then ((db: SQLiteObject) => {
          this.database = db;
          this.presentToast("BD creada");
          this.crearTablas();
        }).catch(e => this.presentToast(e));
      })
    }

  dbState(){
    return this.isDBReady.asObservable();
  }


    async crearTablas() {
      try {
        await this.database.executeSql(this.tblNoticias, []);
        this.presentToast("Tabla creada con exito");
        this.cargarNoticias ();
        this.isDbReady.next (true);
      } catch (error) {
        this.presentToast("Error en Crear Tabla"+error)
      }
    }

    async presentToast (mensaje: string){
      const toast = await this.ToastController.create ({
        message: mensaje,
        duration: 3000
      });
      toast.present();
    }

}

/*

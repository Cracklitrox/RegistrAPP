import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private sqlite: SQLite) { }

  createTablesAndInsertData() {
    this.sqlite.create({
      name: 'mydatabase.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.sqlBatch([
        `
        CREATE TABLE IF NOT EXISTS Region (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          titulo TEXT NOT NULL,
          descripcion TEXT NOT NULL
        )`,
        `
        CREATE TABLE IF NOT EXISTS Turno (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          titulo TEXT NOT NULL
        )`,
        `
        CREATE TABLE IF NOT EXISTS Sede (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          titulo VARCHAR(55) NOT NULL,
          descripcion TEXT NOT NULL,
          foto_sede BLOB NOT NULL,
          direccion TEXT NOT NULL,
          telefono INTEGER NOT NULL,
          dias_disponible INTEGER NOT NULL,
          horarioAtencion_week_inicio INTEGER NOT NULL,
          horarioAtencion_week_fin INTEGER NOT NULL,
          horarioAtencion_weekend_inicio INTEGER NOT NULL,
          horarioAtencion_weekend_fin INTEGER NOT NULL,
          id_region INTEGER NOT NULL,
          FOREIGN KEY (id_region) REFERENCES Region(id)
        )`,
        `
        CREATE TABLE IF NOT EXISTS Carrera (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          titulo TEXT NOT NULL,
          duracion INTEGER NOT NULL,
          descripcion TEXT NOT NULL,
          grado_academico TEXT NOT NULL,
          titulo_obtenido TEXT NOT NULL,
          id_sede INTEGER NOT NULL,
          id_turno INTEGER NOT NULL,
          FOREIGN KEY (id_sede) REFERENCES Sede(id),
          FOREIGN KEY (id_turno) REFERENCES Turno(id)
        )`,
        `
        CREATE TABLE IF NOT EXISTS Profesor (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          pnombre TEXT NOT NULL,
          snombre TEXT NOT NULL,
          appaterno TEXT NOT NULL,
          apmaterno TEXT NOT NULL,
          correo_institucional TEXT NOT NULL,
          telefono INTEGER NOT NULL,
          direccion TEXT NOT NULL,
          titulo_academico TEXT NOT NULL,
          id_sede INTEGER NOT NULL,
          id_turno INTEGER NOT NULL,
          id_carrera INTEGER NOT NULL,
          FOREIGN KEY (id_sede) REFERENCES Sede(id),
          FOREIGN KEY (id_turno) REFERENCES Turno(id),
          FOREIGN KEY (id_carrera) REFERENCES Carrera(id)
        )`,
        `
        CREATE TABLE IF NOT EXISTS Materia (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          sigla TEXT NOT NULL,
          titulo TEXT NOT NULL,
          descripcion TEXT NOT NULL,
          contenido TEXT NOT NULL,
          foto_materia BLOB,
          id_profesor INTEGER NOT NULL,
          FOREIGN KEY (id_profesor) REFERENCES Profesor(id)
        )`,
        `
        CREATE TABLE IF NOT EXISTS Alumno (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          run INTEGER NOT NULL,
          dv_run CHAR(1) NOT NULL,
          pnombre TEXT NOT NULL,
          snombre TEXT NOT NULL,
          appaterno TEXT NOT NULL,
          apmaterno TEXT NOT NULL,
          correo_institucional TEXT NOT NULL,
          fecha_nacimiento DATE NOT NULL,
          telefono INTEGER NOT NULL,
          direccion TEXT NOT NULL,
          qr_credencial BLOB,
          foto_portada BLOB,
          id_sede INTEGER NOT NULL,
          id_turno INTEGER NOT NULL,
          id_carrera INTEGER NOT NULL,
          FOREIGN KEY (id_sede) REFERENCES Sede(id),
          FOREIGN KEY (id_turno) REFERENCES Turno(id),
          FOREIGN KEY (id_carrera) REFERENCES Carrera(id)
        )`,
        `
        CREATE TABLE IF NOT EXISTS Asignatura (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          id_materia INTEGER NOT NULL,
          id_carrera INTEGER NOT NULL,
          FOREIGN KEY (id_materia) REFERENCES Materia(id),
          FOREIGN KEY (id_carrera) REFERENCES Carrera(id)
        )`,
        `
        CREATE TABLE IF NOT EXISTS Asistencia (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          fecha_asistencia DATE NOT NULL,
          hora_asistencia INTEGER NOT NULL,
          estado TEXT NOT NULL,
          id_alumno INTEGER NOT NULL,
          id_profesor INTEGER NOT NULL,
          id_materia INTEGER NOT NULL,
          FOREIGN KEY (id_alumno) REFERENCES Alumno(id),
          FOREIGN KEY (id_profesor) REFERENCES Profesor(id),
          FOREIGN KEY (id_materia) REFERENCES Materia(id)
        )`,
        `
        CREATE TABLE IF NOT EXISTS Configuracion (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          modo_oscuro BOOLEAN NOT NULL DEFAULT TRUE,
          fecha_ultimaSesion DATE NOT NULL,
          hora_ultimaSesion INTEGER NOT NULL,
          id_alumno INTEGER NOT NULL,
          FOREIGN KEY (id_alumno) REFERENCES Alumno(id)
        )`
      ]).then(() => {
        console.log('Tablas creadas con éxito.');
        this.insertInitialData(db);
      }).catch(error => {
        console.error('Error al crear las tablas:', error);
      });
    });
  }

  insertInitialData(db: SQLiteObject) {
    db.sqlBatch([
      `
      INSERT INTO Region (titulo, descripcion) VALUES
        ('Región de Tarapacá', 'Región de Tarapacá en el norte de Chile.'),
        ('Región de Antofagasta', 'Región de Antofagasta en el norte de Chile.'),
        ('Región de Atacama', 'Región de Atacama en el norte de Chile.'),
        ('Región de Coquimbo', 'Región de Coquimbo en el norte de Chile.'),
        ('Región de Valparaíso', 'Región de Valparaíso en la zona central de Chile.'),
        ('Región Metropolitana de Santiago', 'Región Metropolitana de Santiago en la zona central de Chile.'),
        ('Región del Libertador General Bernardo O''Higgins', 'Región de O''Higgins en la zona central de Chile.'),
        ('Región del Maule', 'Región del Maule en la zona central de Chile.'),
        ('Región de Ñuble', 'Región de Ñuble en el centro-sur de Chile.'),
        ('Región del Biobío', 'Región del Biobío en el centro-sur de Chile.'),
        ('Región de La Araucanía', 'Región de La Araucanía en el sur de Chile.'),
        ('Región de Los Ríos', 'Región de Los Ríos en el sur de Chile.'),
        ('Región de Los Lagos', 'Región de Los Lagos en el sur de Chile.'),
        ('Región de Aysén del General Carlos Ibáñez del Campo', 'Región de Aysén en el extremo sur de Chile.'),
        ('Región de Magallanes y de la Antártica Chilena', 'Región de Magallanes en el extremo sur de Chile y la Antártica Chilena.');
      `,
      `
      INSERT INTO Turno (titulo) VALUES
        ('Diurno'),
        ('Vespertino'),
        ('Diurno y Vespertino');
      `,
      `
      INSERT INTO Sede (titulo, descripcion, foto_sede, direccion, telefono, dias_disponible, horarioAtencion_week_inicio, horarioAtencion_week_fin, horarioAtencion_weekend_inicio, horarioAtencion_weekend_fin, id_region) VALUES
        ('Puerto Montt','Sede Central', '../../src/assets/images/sede/Puerto_Montt.jpg', 'Egaña 651', 22334455, 5, 8, 18, 9, 14, 1),
        ('Viña del Mar','Sede Central', '../../src/assets/images/sede/Viña_del_Mar.jpg', 'Álvarez 2366, Chorrillos', 22334456, 4, 9, 17, 10, 15, 1);
      `,
      `
      INSERT INTO Carrera (titulo, duracion, descripcion, grado_academico, titulo_obtenido, id_sede, id_turno) VALUES
        ('Ingeniería en Informática', 8, 'Carrera de Ingeniería en Informática', 'Ingeniería', 'Ingeniero en Informática', 1, 1),
        ('Diseño Gráfico', 8, 'Carrera de Diseño Gráfico', 'Licenciatura', 'Licenciado en Diseño Gráfico', 1, 2);
      `,
      `
      INSERT INTO Profesor (pnombre, snombre, appaterno, apmaterno, correo_institucional, telefono, direccion, titulo_academico, id_sede, id_turno, id_carrera) VALUES
        ('German', 'Gabriel', 'Barrientos', 'Tereucan', 'g.barrientos@duocuc.cl', 98235430, 'Calle nose 123', 'Ingeniero en Informática', 1, 1, 1),
        ('Yessica', 'Betzave', 'Bolivar', 'Romero', 'ye.bolivar@duocuc.cl', 9842429, 'Calle nose 321', 'Ingeniera en Informatica', 1, 3, 1),
        ('Francisco', 'Javier', 'Calfun', 'Gutierrez', 'f.calfun@duocuc.cl', 95343329, 'Calle nose 231', 'Ingeniera en Informatica', 1, 1, 1),
        ('Boris', 'Felipe', 'Sepulveda', 'Millar', 'b.sepulveda@duocuc.cl', 98765449, 'Calle nose 3214', 'Licenciado en Historia de Chile', 1, 1, 1),
        ('Pablo', 'Cesar', 'Proinick', 'Mansilla', 'p.proinick@duocuc.cl', 98765429, 'Calle nose 3261', 'Licenciado en Ingles', 1, 1, 1),
        ('Victor', 'Alejandro', 'Aguero', 'Soto', 'v.aguero@duocuc.cl', 98765429, 'Calle nose 3921', 'Ingeniero en Mecanica Automotriz', 1, 1, 1);
      `,
      `
      INSERT INTO Materia (sigla, titulo, descripcion, contenido, foto_materia, id_profesor) VALUES
        ('ASY4131', 'Arquitectura', 'Modelos arquitectonicos', 'Contenido de Arquitectura 1-3', '../../src/assets/images/banner_materias/arquitectura.png', 1),
        ('CSY4111', 'Calidad de Software', 'Calidad de procesos', 'Contenido de Calidad de Software 1-3', '../../src/assets/images/banner_materias/calidad_software.png', 2),
        ('PGY4121', 'Programacion de Aplicaciones Moviles', 'Ionic y Angular', 'Contenido de Programacion Movil 1-3', '../../src/assets/images/banner_materias/programacion_movil.png', 3),
        ('EAY4450', 'Etica para el trabajo', 'Situaciones de vida laboral', 'Contenido de Etica para el trabajo', '../../src/assets/images/banner_materias/etica_trabajo.png', 4),
        ('INI5111', 'Ingles Intermedio', 'Curso de Ingles Intermedio', 'Contenido de Ingles Intermedio', '../../src/assets/images/banner_materias/ingles_intermedio.png', 5),
        ('MAT4140', 'Estadistica Descriptiva', 'Curso de Estadistica Descriptiva', 'Contenido de Estadistica Descriptiva', '../../src/assets/images/banner_materias/estadistica_descriptiva.jpg', 6);
      `,
      `
      INSERT INTO Alumno (run, dv_run, pnombre, snombre, appaterno, apmaterno, correo_institucional, fecha_nacimiento, telefono, direccion, qr_credencial, foto_portada, id_sede, id_turno, id_carrera) VALUES
        (21196666, '1', 'Carlos', 'Jared', 'Gacitua', 'Villarroel', 'c.gacitua@duocuc.cl', '2002-12-21', 98765432, 'Calle 123', '../../src/assets/images/pruebas/qrcode-generado.png', '../../src/assets/images/pruebas/avatar.png', 1, 1, 1);
      `,
      `
      INSERT INTO Asignatura (id_materia, id_carrera) VALUES
        (1, 1),
        (2, 1),
        (3, 1),
        (4, 1),
        (5, 1),
        (6, 1);
      `,
      `
      INSERT INTO Asistencia (fecha_asistencia, hora_asistencia, estado, id_alumno, id_profesor, id_materia) VALUES
        ('2023-09-25', 830, 'Presente', 1, 3, 3);
      `,
      `
      INSERT INTO Configuracion (modo_oscuro, fecha_ultimaSesion, hora_ultimaSesion, id_alumno) VALUES
        (1, '2023-09-20', 1000, 1);
      `,
    ]).then(() => {
      console.log('Datos iniciales insertados con éxito.');
    }).catch(error => {
      console.error('Error al insertar datos iniciales:', error);
    });
  }
}
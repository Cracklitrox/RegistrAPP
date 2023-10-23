import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrAPPService {

  private baseUrl: string = "http://localhost:3000";
  constructor(
    private http: HttpClient,
  ) { }

  obtenerAlumnos():Observable<any[]> {
    const stUrl = `${ this.baseUrl }/alumno`;
    return this.http.get<any[]>(stUrl);
  }

  verificarExistenciaAlumno(correo: string, contrasena: string): Observable<boolean> {
    return this.obtenerAlumnos().pipe(
      map((alumnos) => {
        return alumnos.some((alumno) => alumno.correo_institucional === correo && alumno.contrasena === contrasena);
      })
    );
  }

  obtenerCorreoAlumno(correo: string):Observable<boolean> {
    return this.obtenerAlumnos().pipe(
      map((alumnos) => {
        return alumnos.some((alumno) => alumno.correo_institucional === correo);
      })
    )
  }

  actualizarContrasenaAlumno(id: number, nuevaContrasena: string): Observable<any> {
    const stUrl = `${this.baseUrl}/alumno/${id}`;
    return this.http.patch(stUrl, { contrasena: nuevaContrasena });
  }  
}
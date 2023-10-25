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

  // Todos los alumnos
  obtenerAlumnos():Observable<any[]> {
    const stUrl = `${ this.baseUrl }/alumno`;
    return this.http.get<any[]>(stUrl);
  }

  // Alumnos de forma individual
  obtenerAlumnoPorCorreo(correo: string): Observable<any> {
    const stUrl = `${this.baseUrl}/alumno`;
    return this.http.get<any[]>(stUrl).pipe(
      map((alumnos) => {
        return alumnos.find((alumno) => alumno.correo_institucional === correo);
      })
    );
  }  

  // Verifica la existencia del alumno en base al correo y la contraseña.
  verificarExistenciaAlumno(correo: string, contrasena: string): Observable<boolean> {
    return this.obtenerAlumnos().pipe(
      map((alumnos) => {
        return alumnos.some((alumno) => alumno.correo_institucional === correo && alumno.contrasena === contrasena);
      })
    );
  }

  // Verifica si el correo que ingreso el usuario existe en los registros.
  obtenerCorreoAlumno(correo: string):Observable<boolean> {
    return this.obtenerAlumnos().pipe(
      map((alumnos) => {
        return alumnos.some((alumno) => alumno.correo_institucional === correo);
      })
    )
  }

  // En base al id del alumno lo encuentra y entrega una nueva contraseña ingresada por el usuario.
  actualizarContrasenaAlumno(id: number, nuevaContrasena: string): Observable<any> {
    const stUrl = `${this.baseUrl}/alumno/${id}`;
    return this.http.patch(stUrl, { contrasena: nuevaContrasena });
  }  
}
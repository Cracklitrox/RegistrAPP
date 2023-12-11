import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.page.html',
  styleUrls: ['./teacher-page.page.scss'],
})
export class TeacherPagePage implements OnInit {

  teacherData: any = {};

  constructor(private router: Router) { } // Inyecta el Router

  ngOnInit() {
    const storedData = localStorage.getItem('usuarioDetalles');
    if (storedData) {
      this.teacherData = JSON.parse(storedData);
    }
  }

  // Función de logout
  // Función de logout
  logout() {
    localStorage.removeItem('usuarioDetalles'); // Elimina los detalles del usuario de localStorage
    localStorage.removeItem('ingresado'); // Elimina el ítem 'ingresado' de localStorage
    this.router.navigate(['/login']); // Redirige a la página de login
  }

}
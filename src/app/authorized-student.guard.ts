import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedStudentGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate() :boolean {
    if (localStorage.getItem('ingresado')) {
      console.log(localStorage.getItem('ingresado'))
      console.log("ok")
      return true;
    } else {
      console.log(localStorage.getItem('ingresado'))
      console.log("ok'nt")
      this.router.navigate(['/login']);
      return false;
    }
  }

}
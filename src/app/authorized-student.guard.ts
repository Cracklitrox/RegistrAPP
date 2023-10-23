import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

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
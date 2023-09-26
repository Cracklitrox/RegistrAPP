import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedStudentGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const correoInstitucional = this.userService.getCorreoInstitucional();
    const contrasena = this.userService.getContrasena();

    if (correoInstitucional === 'c.gacitua' && contrasena === 'carlitos8') {
      console.log(correoInstitucional);
      console.log(contrasena);
      console.log('funciona');
      return true;
    } else {
      console.log(correoInstitucional);
      console.log(contrasena);
      console.log('no funciona');
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
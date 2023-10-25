import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisavowedStudentGuard implements CanActivate {

  constructor(
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    
    if (localStorage.getItem('ingresado')){
      console.log('Verificado')
      this.router.navigate(['/main-page'])
      return false;
    } else {
      console.log('No verificado')
      return true;
    }
  }

  
}
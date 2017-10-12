import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';

@Injectable()
export class AuthGuardGuard implements CanActivate {

  constructor(private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean|any
    
    {
    if(localStorage.getItem('access-token') != null){
          return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

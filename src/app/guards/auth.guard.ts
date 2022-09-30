import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route,RouterStateSnapshot,UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseAuthService } from '../api/firebase-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(public auth: FirebaseAuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

  return  this.auth.loginGuard()

  }
  
 /*  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   console.log('CanLoad')
    return this.auth.loginState()
  } */
  

 
}

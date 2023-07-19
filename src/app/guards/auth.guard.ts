import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseAuthService } from '../api/firebase-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(public auth: FirebaseAuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

  return  this.auth.loginGuard()

  }
  
 /*  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   console.log('CanLoad')
    return this.auth.loginState()
  } */
  

 
}

import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Irequest } from '@domain/interface';
import { DataService } from '@repository/data.service';
import { Observable, of } from 'rxjs';
import { ResolveService } from './resolve.service';
import { TestCompose } from '@domain/validator-local';
import { FirebaseAuthService } from '../api/firebase-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppResolver implements Resolve<Irequest> {

  constructor(
    private router: Router,
    public auth: FirebaseAuthService,
    private resolveService: ResolveService,
    private data: DataService,

  ) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Irequest> {

    const request = this.resolveService.setRequest(route)
    const test = new TestCompose(request).testRequest

    if (test == null) {

      console.log('Resolve Sucess')
      
      return this.auth.loginResolve(request)

    } else {
      console.log('Resolve Error')
      console.log(test)
      this.router.navigate([`${this.data.language}/login/sign-in`])
      return of()
    }

  }
}

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
export class GetColectionResolver implements Resolve<any> {
  constructor(
    private router: Router,
    public auth: FirebaseAuthService,
    private resolveService: ResolveService,
    private data: DataService,

  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    const request = this.resolveService.getRequest(route)
    const test = new TestCompose(request).testRequest

    if (test == null) {

      console.log('Resolve Colection')

      return this.data.httpColection(request)

    } else {
      console.log('Resolve Error')
      console.log(test)
      this.router.navigate([`${this.data.language}/login/sign-in`])
      return of()
    }

  }
}

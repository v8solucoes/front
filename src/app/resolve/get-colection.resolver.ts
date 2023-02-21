import { InterfaceService } from './../view/interface/interface.service';
import { BackandService } from '@repository/backand.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { DataService } from '@repository/data.service';
import { Observable, of } from 'rxjs';
import { ResolveService } from './resolve.service';
import { TestCompose } from '@domain/validator-local';
import { FirebaseAuthService } from '../api/firebase-auth.service';
import { _debug } from '../../../../domain/src/domain/repository/debug';

@Injectable({
  providedIn: 'root'
})
export class GetColectionResolver implements Resolve<any> {
  constructor(
    private router: Router,
    public auth: FirebaseAuthService,
    private resolveService: ResolveService,
    private i: InterfaceService,
    private backand: BackandService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    const request = this.resolveService.getRequest(route, state)
    const test = new TestCompose(request).testRequest
    
    if (test == null) {

      return this.backand.httpColection(request)

    } else {

      if (_debug.resolver) {
        console.log('Resolve Colection Error')
      }   
      
      this.i.data.errorResolve = test
      this.router.navigate([`errorResolver`])

      return of()
    }

  }
}

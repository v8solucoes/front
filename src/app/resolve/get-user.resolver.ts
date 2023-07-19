import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Irequest } from '@domain/interface';

import { Observable, of } from 'rxjs';
import { ResolveService } from './resolve.service';
import { TestCompose } from '@domain/validator-local';
import { BackandService } from '@repository/backand.service';
import { _debug } from '../../../../domain/src/domain/repository/debug';

@Injectable({
  providedIn: 'root'
})
export class GetUserResolver  {
  
 constructor(
    private router: Router,
    private resolveService: ResolveService,
    private backand: BackandService,

  ) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Irequest> {

    const request = this.resolveService.getRequest(route,state)
    const test = new TestCompose(request).testRequest

    if (test == null) {

      if (_debug.resolver) {
        console.log('Resolve User Sucess')
        console.log(request)
      }
      
      return this.backand.httpUser(request)

    } else {
      console.log('Resolve User Error')
      console.log(test)
      this.router.navigate([`${request.language}/login/sign-in`])
      return of()
    }

  }
}

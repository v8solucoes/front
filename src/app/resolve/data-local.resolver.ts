import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Irequest } from '@domain/interface';
import { Observable, of } from 'rxjs';
import { TestCompose } from '@domain/validator-local';
import { DataService } from '@repository/data.service';
import { ResolveService } from './resolve.service';


@Injectable({
  providedIn: 'root'
})
export class DataLocalResolver implements Resolve<Irequest> {

  constructor(
    private router: Router,
    private resolveService: ResolveService,
    private data: DataService,

  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Irequest> {

    const request = this.resolveService.getRequest(route)
    const test = new TestCompose(request).testRequest

    if (test == null) {
      
      this.data.requestLast['user'] = {
        'name': 'Local',
        'nivel': 'adm',
        'userId': 'undefinid'
        }
      
      return of(request)

    } else {

      this.data.errorResolve = test
      this.router.navigate([`errorResolver`])
  
      return of()
    }

  }
}

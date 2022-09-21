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
console.log('resolver')
    const request = this.resolveService.setRequest2(route)
    const test = new TestCompose(request).testRequest

    if (test == null) {
      
      return of(request)

    } else {

      this.data.errorResolve = test
      this.router.navigate([`notFounRequest/${this.data.request['page']}`])
     
      return of()
    }

    // console.log('RESOLVER')

    // const document = route.parent!.url[2].path as Irequest['document']
    // const request = this.data.request[document]
    // const test = new TestCompose(request).testRequest
  
    // if (test == null) {

    //   return of(request);
    // } else {
    //   this.data.errorResolve = `Request Option(s) not valid: "${JSON.stringify(test)}"`
    //   console.log( this.data.errorResolve)
    //   this.router.navigate([`notFounRequest`])
    // }
    
    // return of(this.data.request[document])

  }
}

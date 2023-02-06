import { FormService } from '@component/form/form.service';
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
import { _debug } from '@repositoryDomain/debug';



@Injectable({
  providedIn: 'root'
})
export class DataLocalResolver implements Resolve<Irequest> {

  constructor(
    private router: Router,
    private resolveService: ResolveService,
    private data: DataService,
    private form: FormService

  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Irequest> {

    const request = this.resolveService.getRequest(route,state)

    request['validator'] = {
      id: request.page,
      name: 'testRequest',
      label: 'Test Request',
      value: '',
      language: request.language,
      typeExecute: 'front',
      error: null
    }
    const test = new TestCompose(request).testRequest

    if (test == null) {
      
      if (_debug.resolver) {
        console.log('Local Resolver')
      }
      
      this.data.requestLast['user'] = {
        'name': 'Local',
        'nivel': 'adm',
        'userId': 'null',
        'acessToken': 'null'
      }
      this.data.form[`${request.document}`] = this.form.createForm()
      return of(request)

    } else {

      this.data.errorResolve = test
      this.router.navigate([`PageNotFoundComponent`])
  
      return of()
    }

  }
}

import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Irequest } from '@domain/interface';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WindowDom } from '@method/window.dom';
import { TestCompose } from '@domain/validator-local';
import { DataService } from '@repository/data.service';


@Injectable({
  providedIn: 'root'
})
export class DataLocalResolver implements Resolve<Irequest> {

  constructor(
    private router: Router,
    private data: DataService,
    private windowDom: WindowDom,
/*     private formService: FormService */
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Irequest> {
  /*    console.log('ROUTE')
    console.log(route)
    console.log(route.parent?.url[0].path)
     console.log('STATE')
     console.log(state) */
    // Request
    const language =  route.parent?.url[0].path as Irequest['language']
    const page =  route.parent!.url[1].path as Irequest['page']
    const document = route.parent!.url[2].path as Irequest['document']
    const action = route.params['action'] ? route.params['action'] : `null`
    const item = route.params['item'] ? route.params['item'] : null

    this.data.language = language

    this.data!.request = {[document] : {
      language,
      page,
      document,
      action,
      domain: this.windowDom.nativeWindow.location.hostname as Irequest['domain'],
      environment:  environment.environment as Irequest['environment'],
      dateUpdate: new Date(),
      // Optional
      dateCreate: action == 'create' ? new Date() : null,
      colection: null,
      validator: {
        id: 'request',
        name: 'testRequest',
        label: 'Test Request',
        value: '',
        language,
        typeExecute: 'front',
        error: null
      },
      item,
      data: null
    }}
   /*    console.log(this.data.request) */
    const test = new TestCompose(this.data.request[document]).testRequest
  
    if (test == null) {

      this.data.request
      return of(this.data.request[document]);
    } else {
      this.data.errorResolve = `Request Option(s) not valid: "${JSON.stringify(test)}"`
      console.log( this.data.errorResolve)
      this.router.navigate([`notFounRequest`])
    }
    
    return of(this.data.request[document])

  }
}

import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Iaction, Ipage, Irequest } from '@domain/interface';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WindowDom } from '@method/window.dom';
import { OptionsValidator, TestCompose } from '@domain/validator-local';
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

    // Request
    const document = route.params['document']
    this.data.language = route.parent?.url[0].path as Irequest['language']

    this.data!.request = {[document] : {
      language: route.parent?.url[0].path as Irequest['language'],
      page: route.parent?.url[1].path as Ipage,
      domain: this.windowDom.nativeWindow.location.hostname as Irequest['domain'],
      environment:  environment.environment as Irequest['environment'],
      action: route.params['action'] as Iaction,
      document: route.params['document'],
      dateUpdate: new Date(),
      // Optional
      dateCreate: route.params['action'] == 'create' ? new Date() : null,
      colection: null,
      validator: {
        id: 'request',
        name: 'testRequest',
        label: 'Test Request',
        value: '',
        language: route.parent?.url[0].path as Irequest['language'] || 'en',
        typeExecute: 'front',
        error: null
      },
      item: null,
      data: null
    }}
    /*   console.log(this.data.request) */
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

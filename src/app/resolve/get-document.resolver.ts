import { _debug } from './../../../../domain/src/domain/repository/debug';

import { BackandService } from '@repository/backand.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { DataService } from '@repository/data.service';
import { Observable, of } from 'rxjs';
import { TestCompose } from '../../../../domain/src/domain/validators/test/test-compose';
import { FirebaseAuthService } from '../api/firebase-auth.service';
import { ResolveService } from './resolve.service';
import { FormService } from '@component/form/form.service';

@Injectable({
  providedIn: 'root'
})
export class GetDocumentResolver implements Resolve<any> {

  constructor(
    private router: Router,
    public auth: FirebaseAuthService,
    private resolveService: ResolveService,
    private data: DataService,
    private backand: BackandService,
    private form: FormService

  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    const request = this.resolveService.getRequest(route, state)
    const test = new TestCompose(request).testRequestDocument

    if (test == null) {

      if (_debug.resolver) {
        console.log('Resolver Document')
        console.log(request.action)
      }   

      if (request.action == 'create') {

        this.data.form[`${this.data.requestLast.document}`] = this.form.createForm()

        if (_debug.form) {
          console.log('Form Create')
          console.log(this.data.form[`${request.document}`])
        }
      
        return of(null) 
        
      } else {
        return this.backand.httpDocument(request)
      }

    } else {
      console.log('Resolve Document Error')
      this.data.errorResolve = test
      this.router.navigate([`errorResolver`])
      return of()
    }

  }
}

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
import { InterfaceService } from '@view/interface/interface.service';

@Injectable({
  providedIn: 'root'
})
export class GetDocumentResolver implements Resolve<any> {

  constructor(
    private router: Router,
    public auth: FirebaseAuthService,
    private resolveService: ResolveService,
    private i: InterfaceService,
    private backand: BackandService,
    private form: FormService

  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    const request = this.resolveService.getRequest(route, state)
    const test = new TestCompose(request).testRequestDocument

    this.i.load.document = false
    this.i.load.colection = false

    if (test == null) {

      if (_debug.resolver) {
        console.log('Resolver Document')
        console.log(this.i.data)
      }

      if (request.action == 'create') {

        this.i.data.form[`${this.i.data.requestLast.document}`] = this.form.createForm()

        if (_debug.form) {
          console.log('Form Create')
          console.log(this.i.data.form[`${request.document}`])
          console.log('Form Permission')
          console.log(this.i.data.local.permission)

        }

        return of(null)

      } else {

        if (_debug.form) {
          console.log('Form Permission')
          console.log(this.i.data.local.permission)
        }

        return this.backand.httpDocument(request)
      }

    } else {
      console.log('Resolve Document Error')
      this.i.data.errorResolve = test
      this.router.navigate([`errorResolver`])
      return of()
    }

  }
}

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

@Injectable({
  providedIn: 'root'
})
export class GetDocumentResolver implements Resolve<any> {

  constructor(
    private router: Router,
    public auth: FirebaseAuthService,
    private resolveService: ResolveService,
    private data: DataService,

  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    const request = this.resolveService.getRequest(route)
    const test = new TestCompose(request).testRequestDocument

    if (test == null) {

      console.log('Resolve Document')

      return this.data.httpDocument(request)

    } else {
      console.log('Resolve Document Error')
      this.data.errorResolve = test
      this.router.navigate([`errorResolver`])
      return of()
    }
 /*    return of(true); */
  }
}

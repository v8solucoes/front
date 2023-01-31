import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Irequest } from '@domain/interface';
import { environment } from 'src/environments/environment';
/* import { WindowDom } from '@method/window.dom'; */
import { DataService } from '@repository/data.service';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ResolveService {

  constructor(
    @Inject(DOCUMENT)
    private document: Document,
    private data: DataService,
  /*   private windowDom: WindowDom, */

  ) { }

  getRequest(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Irequest {

    const root = route as any

    /* console.log(state.url) */
   /*  console.log(this.windowDom.nativeWindow) */
    
    
    const urlSegments = root['_urlSegment']['segments'] as any

    const domain = this.document.location.hostname as Irequest['domain']
    const language = urlSegments[0].path as Irequest['language']
    const page = urlSegments[1].path as Irequest['page']
    const document = urlSegments[2] ? urlSegments[2].path : `null`
    const key = urlSegments[3] ? urlSegments[3].path : null
    const action = urlSegments[4] ? urlSegments[4].path : `null`

    this.data.language = language

    const request: Irequest = {
      language,
      page,
      document,
      controller: null,
      action,
      domain,
      environment: environment.environment as Irequest['environment'],
      dateTime: new Date(),
      colection: document,
      key,
    }
    this.data.requestLast = request
    return request
  }

}

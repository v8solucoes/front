import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Irequest } from '@domain/interface';
import { environment } from 'src/environments/environment';
import { WindowDom } from '@method/window.dom';
import { DataService } from '@repository/data.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveService {

  constructor(
    private data: DataService,
    private windowDom: WindowDom,
  ) { }

  getRequest(route: ActivatedRouteSnapshot): Irequest {

    const root = route as any
    
    const urlSegments = root['_urlSegment']['segments'] as any

    const domain = this.windowDom.nativeWindow.location.hostname as Irequest['domain']
    const language = urlSegments[0].path as Irequest['language']
    const page = urlSegments[1].path as Irequest['page']
    const document = urlSegments[2] ? urlSegments[2].path : `null`
    const action = urlSegments[3] ? urlSegments[3].path : `null`
    const key = urlSegments[4] ? urlSegments[4].path : null

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

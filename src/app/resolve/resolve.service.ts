import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Irequest } from '@domain/interface';
import { environment } from 'src/environments/environment';
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

  ) { }

  getRequest(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Irequest {

    const root = route as any
    const lastUrl = state.url
    const lastUrlNoLanguage = state.url.slice(3)    
    
    const urlSegments = root['_urlSegment']['segments'] as any

    const domain = environment.test ? this.document.location.hostname as Irequest['domain'] : 'v8app-888cd.web.app' as Irequest['domain']
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
      environment:  environment.test ? environment.environment as Irequest['environment'] : 'prod' as Irequest['environment'],
      dateTime: new Date(),
      colection: document,
      key,
      lastUrl,
      lastUrlNoLanguage
    }
    this.data.requestLast = request
/*     console.log('CREATE REQUEST LAST')
    console.log(this.data) */
    return request
  }

}

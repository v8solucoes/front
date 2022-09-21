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

  testRequest(route: ActivatedRouteSnapshot) {

    const router = route.parent?.url[0]?.path ? route.parent : route
    const domain = this.windowDom.nativeWindow.location.hostname as Irequest['domain']
    const language = router.url[0].path as Irequest['language']
    const page = router.url[1].path as Irequest['page']
    const document = router.url[2].path ? router.url[2].path as Irequest['document'] : `null`
    const action = router.params['action'] ? router.params['action'] : `null`
    const item = router.params['item'] ? router.params['item'] : null

    this.data.language = language

    this.data!.request = {
      [document]: {
        language,
        page,
        document,
        action,
        domain,
        environment: environment.environment as Irequest['environment'],
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
      }
    }

    return this.data.request[document]

  }
  setRequest(route: ActivatedRouteSnapshot) {

    const router = route.parent?.url[0]?.path ? route.parent : route
    console.log( router.params['document'] )
    const domain = this.windowDom.nativeWindow.location.hostname as Irequest['domain']
    const language = router.url[0].path as Irequest['language']
    const page = router.url[1].path as Irequest['page']
    const document = router.params['document'] ? router.params['document']  as Irequest['document'] : `null`
    const action = router.params['action'] ? router.params['action'] : `null`
    const item = router.params['id'] ? router.params['id'] : null

    this.data.language = language

    this.data!.request = {
      [page]: {
        language,
        page,
        document,
        action,
        domain,
        environment: environment.environment as Irequest['environment'],
        dateUpdate: new Date(),
        // Optional
        dateCreate: action == 'create' ? new Date() : null,
        colection: null,
        validator: {
          id: page,
          name: 'testRequest',
          label: 'Test Request',
          value: '',
          language,
          typeExecute: 'front',
          error: null
        },
        item,
        data: null
      }
    }
    return this.data.request[page]
  }
  setRequest2(route: ActivatedRouteSnapshot) {

    const router = route.parent?.url[0]?.path ? route.parent : route
    const domain = this.windowDom.nativeWindow.location.hostname as Irequest['domain']
    const language = router.url[0].path as Irequest['language']
    const page = router.url[1].path as Irequest['page']
    const document = router.url[2].path ? router.url[2].path as Irequest['document'] : `null`
    const action = router.params['action'] ? router.params['action'] : `null`
    const item = router.params['item'] ? router.params['item'] : null

    this.data.language = language

    this.data!.request = {
      [document]: {
        language,
        page,
        document,
        action,
        domain,
        environment: environment.environment as Irequest['environment'],
        dateUpdate: new Date(),
        // Optional
        dateCreate: action == 'create' ? new Date() : null,
        colection: null,
        validator: {
          id: page,
          name: 'testRequest',
          label: 'Test Request',
          value: '',
          language,
          typeExecute: 'front',
          error: null
        },
        item,
        data: null
      }
    }
    return this.data.request[document]
  }
}

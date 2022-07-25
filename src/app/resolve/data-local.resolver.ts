import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Iaction, Ipage, Irequest } from '@shared-library/interface';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WindowDom } from '@method/window.dom';
import { OptionsValidator } from '@shared-library/validator';
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
    this.data.dataLocal.request = {
      language: this.language(route),
      page: this.page(route),
      domain: this.domain(route),
      environment: this.environmentType(route),
      action: this.action(route),
      document: this.document(route),
      dateUpdate: new Date(),
      // Optional
      dateCreate: route.params['action'] == 'create' ? new Date() : null,
      colection: null,
      validator: null,
      item: null,
      data: null
    }
    let local = this.data.dataLocal.data[this.data.dataLocal.request.document]
    local.request = this.data.dataLocal.request
    local.form = this.data.getLocal(this.data.dataLocal.document)
    
    return of(this.data.dataLocal.request);
  }

  document(route: ActivatedRouteSnapshot): Irequest['document'] {
    
    const document = route.params['document']

    const test = !!document ? new OptionsValidator().moduleId.test(document) : null

    if (test == null) {

    } else {
      this.data.dataLocal.errorResolve = `Document: "${document}" not option valid.`
      this.router.navigate([
        `${route.parent?.url[0].path}/${route.parent?.url[1].path}/${document}`])
     
    }
    return document
  }
  colection(route: ActivatedRouteSnapshot): Irequest['document'] {
    
    const colection = route.params['colection']

    const test = new OptionsValidator().moduleId.test(colection)

    if (test == null) {

    } else {
      this.data.dataLocal.errorResolve = `Colection: "${colection}" not option valid.`
      this.router.navigate([
        `${route.parent?.url[0].path}/${route.parent?.url[1].path}/${colection}`])
    }
    return colection
  }

  language(route: ActivatedRouteSnapshot):Irequest['language'] {
    const language = route.parent?.url[0].path as Irequest['language']
    const test = new OptionsValidator().language.test(language)

    if (test == null) {

    } else {
      this.data.dataLocal.errorResolve = `Language: "${language}" not option valid.`
      this.router.navigate([
        `${route.parent?.url[0].path}/${route.parent?.url[1].path}`])
    }
    return language

  }
  page( route: ActivatedRouteSnapshot):Irequest['page'] {
    const page = route.parent?.url[1].path as Ipage
    const test = new OptionsValidator().page.test(page)

    if (test == null) {

    } else {
      this.data.dataLocal.errorResolve =  `Page: "${page}" not option valid.`
      this.router.navigate([
        `${route.parent?.url[0].path}/${route.parent?.url[1].path}`])
    }
    return page

  }

  action(route: ActivatedRouteSnapshot): Iaction {
    const action = route.params['action'] as Iaction
    const test = new OptionsValidator().action.test(action)

    if (test == null) {

    } else {
      this.data.dataLocal.errorResolve = `Action: "${action}" not option valid.`
      this.router.navigate([
        `${route.parent?.url[0].path}/${route.parent?.url[1].path}`])
    }
    return action
  }
  environmentType(route: ActivatedRouteSnapshot):Irequest['environment'] {
    const env = environment.environment as Irequest['environment']
    const test = new OptionsValidator().environment.test(env)

    if (test == null) {

    } else {
      this.data.dataLocal.errorResolve = `Environment: "${env}" not option valid.`
      this.router.navigate([
        `${route.parent?.url[0].path}/${route.parent?.url[1].path}`])
    }
    return env
  }
  domain(route: ActivatedRouteSnapshot): Irequest['domain'] {
    const domain = this.windowDom.nativeWindow.location.hostname as Irequest['domain']
    const test = new OptionsValidator().domain.test(domain)

    if (test == null) {

    } else {
      this.data.dataLocal.errorResolve = `Domain: "${domain}" not option valid.`
      this.router.navigate([
        `${route.parent?.url[0].path}/${route.parent?.url[1].path}`])
    }
    return domain
  }
}

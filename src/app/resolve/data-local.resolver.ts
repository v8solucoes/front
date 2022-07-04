import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { DataLocalService } from '@repository/data-local.service';
import { Iaction, Ipage, Irequest } from '@shared-library/interface';

import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WindowDom } from '@method/window.dom';
import { OptionsValidator } from '@shared-library/validator';

@Injectable({
  providedIn: 'root'
})
export class DataLocalResolver implements Resolve<Irequest> {

  constructor(
    private router: Router,
    private dataLocal: DataLocalService,
    private windowDom: WindowDom
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Irequest> {
   
    // Request
    this.dataLocal.request = {
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
    return of(this.dataLocal.request);
  }

  document(route: ActivatedRouteSnapshot): Irequest['document'] {
    
    const document = route.params['document']

    const test = !!document ? new OptionsValidator().moduleId.test(document) : null

    if (test == null) {

    } else {
      this.dataLocal.errorResolve = `Document: "${document}" not option valid.`
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
      this.dataLocal.errorResolve = `Colection: "${colection}" not option valid.`
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
      this.dataLocal.errorResolve = `Language: "${language}" not option valid.`
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
      this.dataLocal.errorResolve =  `Page: "${page}" not option valid.`
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
      this.dataLocal.errorResolve = `Action: "${action}" not option valid.`
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
      this.dataLocal.errorResolve = `Environment: "${env}" not option valid.`
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
      this.dataLocal.errorResolve = `Domain: "${domain}" not option valid.`
      this.router.navigate([
        `${route.parent?.url[0].path}/${route.parent?.url[1].path}`])
    }
    return domain
  }
}

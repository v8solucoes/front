import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RequisicaoDados } from '../05-compartilhado/app.interface'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DadosService {

  constructor(
    public http: HttpClient,
/*     public autenticar: AutenticarService */
  ) {
    
  }

  httpApi(req: RequisicaoDados): Observable<any> {

    return this.http.post<any>(`${environment.api}/api`, req)
  }
}
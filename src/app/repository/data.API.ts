import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/* import { RequisicaoDados } from '../shared/interface' */
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DataAPI {

  constructor(
    public http: HttpClient,
/*     public autenticar: AutenticarService */
  ) {
    
  }

  httpApi(req: any): Observable<any> {

    return this.http.post<any>(`${environment.api}/api`, req)
  }
}
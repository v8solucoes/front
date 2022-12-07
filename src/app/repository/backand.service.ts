import { DataService } from '@repository/data.service';
import { Injectable } from '@angular/core';
import { Irequest, IresponseValidatorCompose } from '@domain/interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackandService {

  constructor(
    public http: HttpClient,
    public data: DataService
  ) { }

  httpCRUDResponseCompose(req: Irequest): Observable<IresponseValidatorCompose> {

    return this.http.post<IresponseValidatorCompose>(`${environment.api}/CRUD`, req)
  }

  httpUser(request: Irequest): Observable<any> {

    return this.http.get<any>(`${environment.api}/user/${this.data.acessToken}/${JSON.stringify(request)}`)
  }
}

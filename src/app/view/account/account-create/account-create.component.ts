import { Component } from '@angular/core';
import { DataService } from '@repository/data.service';
import { FirebaseAuthService } from 'src/app/api/firebase-auth.service';
import { BackandService } from './../../../repository/backand.service';
import { Irequest, IresponseValidatorCompose } from '@domain/interface';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { _debug } from '../../../../../../domain/src/domain/repository/debug';


@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss'],
  
})

export class AccountCreateComponent {
  load = false
  inscription!: Subscription

  loading = false;
  valid = true;
  processing = false;
  sucess = false;

  constructor(
    private auth: FirebaseAuthService,
    public data: DataService,
    public backand: BackandService,
    private route: ActivatedRoute
  ) {
    
  }
  
  ngOnInit() {
    
    this.route.data.subscribe(req => {

      if (_debug.pg.account) {
        console.log('Account-Adm>Create')
        console.log(this.data.form)
      }
     
      this.loading = true;
    }).closed

}
  async createAccount() {
    const accounAdm = this.data.form[this.data.requestLast.document].value
    const req = {...this.data.requestLast}
   
    this.valid = false
    this.processing = true;

    req.data =  accounAdm 

    console.log(req)

    this.backand.httpCrudGeneric('create').subscribe(async (response: IresponseValidatorCompose | null) => {
   
      console.log(response?.error)
    
      if (response?.error == undefined) {
        
        setTimeout( () => {
          /*        this.createForm.form.reset() */
          this.processing = false 
          this.sucess = true
          this.auth.router.navigate([`${this.data.language}/login/sign-in`])
        }, 2000);

      } else {

        return null
      }
      return
    })
  }
  async googleAuth() {
    return this.auth.googleAuth()
  }

}
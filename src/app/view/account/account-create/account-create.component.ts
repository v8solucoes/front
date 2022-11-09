import { Component } from '@angular/core';
import { DataService } from '@repository/data.service';
import { IcreateForm, ImodelUser, Irequest, IresponseValidatorCompose } from '@domain/interface';
import { FirebaseAuthService } from 'src/app/api/firebase-auth.service';
import { UntypedFormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


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

  createForm!: IcreateForm<UntypedFormGroup>;

  constructor(
    private auth: FirebaseAuthService,
    public data: DataService,
    private route: ActivatedRoute
  ) {
    
  }
  
  ngOnInit() {
    
    this.route.data.subscribe(req => {
      const request = req['request']
      console.log('CREATE INSCRIPTION')
      console.log(request)
      this.createForm = this.data.createForm(request)
      this.loading = true;
    }).closed

}
  async createAccount() {
    const accounAdm = this.createForm.form.value
    const user = accounAdm[this.createForm.request.document] as ImodelUser
    const req = this.createForm.request
   
    this.valid = false
    this.processing = true;

    req.data =  accounAdm 

    console.log(req)

    this.data.httpCRUDResponseCompose(this.createForm.request as Irequest).subscribe(async (response: IresponseValidatorCompose| null) => {
   
      console.log(response)
    
      if (response == null) {
        
        
     /*    this.auth.loginIn(user.email, user.password,req.language) */
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
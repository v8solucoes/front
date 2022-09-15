import { Component } from '@angular/core';
import { DataService } from '@repository/data.service';
import { IcreateForm, ImodelUser, Irequest, IresponseValidatorCompose } from '@domain/interface';
import { FirebaseAuthService } from 'src/app/api/firebase-auth.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss'],
  
})

export class AccountCreateComponent {

  loading = false;
  valid = true;
  processing = false;
  sucess = false;

  createForm: IcreateForm<FormGroup>;

  constructor(
    private auth: FirebaseAuthService,
    public data: DataService,
  ) {

    this.createForm = this.data.createForm('account-adm')
    this.createForm.form.get(['logn','email'])
    
  }
  
  ngOnInit() {
    this.loading = true;
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
        
        await this.auth.loginIn(user.email, user.password,req.language)
        
        setTimeout( () => {
   /*        this.createForm.form.reset() */
          this.processing = false 
          this.sucess = true
         
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
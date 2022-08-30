import { Component } from '@angular/core';
import { DataService } from '@repository/data.service';
import { IcreateForm, Irequest } from '@domain/interface';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})

export class AccountCreateComponent {

  loading = false;
  valid = true;
  processing = false;
  sucess = false;

  createForm: IcreateForm;

  constructor(
/*     private activatedRoute: ActivatedRoute, */
    public data: DataService
  ) {

    this.createForm = this.data.createForm('account-adm')
    
  }
  
  ngOnInit() {
    this.loading = true;
}
  createAccount() {
    this.valid = false
    this.processing = true;

    this.createForm.request.data = this.createForm.form.value

    console.log(this.createForm.request)

    this.data.httpCRUD(this.createForm.request as Irequest).subscribe((response) => {
      const test = response as any[]
      console.log(test)
      if (test == null) {

        setTimeout(() => {
          this.createForm.form.reset()
          this.processing = false 
          this.sucess = true
         
        }, 2000);
       /*  this.processing = false */
      }
      return 
    })
  }

}
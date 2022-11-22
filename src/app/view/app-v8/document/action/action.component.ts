import { UntypedFormGroup } from '@angular/forms';
import { IcreateForm, IresponseValidatorCompose } from '@domain/interface';
import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '@view/app-v8/interface.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  document: IcreateForm<UntypedFormGroup>

  constructor(
    public i: InterfaceService,
  ) {
    this.document = this.i.data.documentService[this.i.data.requestLast.document] as IcreateForm<UntypedFormGroup>
   }

  ngOnInit(): void {

  }
  async update() {

    console.log('Action')
   
    try {

      this.i.data.httpCrudGeneric('create').subscribe(async (response: IresponseValidatorCompose | null) => {

        console.log(response)
      })
      
    
      
    } catch (error) {
      console.log(error)
    }
   
}
}

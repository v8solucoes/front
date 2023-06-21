import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ImodelRecursive, IpermissionRecursive, Irequest } from '@domain/interface';
import { InterfaceService } from '@view/interface/interface.service';

@Component({
  selector: 'app-document-nav-top',
  templateUrl: './document-nav-top.component.html',
  styleUrls: ['./document-nav-top.component.scss']
})
export class DocumentNavTopComponent {

  name: string = '...'

  constructor(public i: InterfaceService) { 
   
    const document = i.data.documentName
    const form = i.data.form[document]
    const permission = i.data.local.getRecursive(document).permission[0]._group;
    const permissionfistName = permission![0].id;
    const formfistName = form.get([document,permissionfistName])?.value
    this.name = formfistName
    this.i.data.lastFirstName = formfistName

  /*   setTimeout(() => {
       this.name = 'this.i.document.name'
    }, 200); */
   
  }

}

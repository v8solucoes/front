
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IcreateForm } from '@domain/interface';
import { Subscription } from 'rxjs';
import { InterfaceService } from '../interface.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  load = false
  inscription!: Subscription
  document!: IcreateForm<UntypedFormGroup>

  constructor(
    public i: InterfaceService,
    private route: ActivatedRoute

  ) {
   
  }

  ngOnInit(): void {
    console.log('Document')
    this.inscription = this.route.data.subscribe((document) => {
      const doc = document['response']
      const documentName = this.i.data.requestLast.document
      this.i.actionsEmitter.emit('documentCloset')
      console.log(doc)
      
      this.i.data.documentService = {[`${documentName}`] : this.i.data.createFormDocument(this.i.data.requestLast, doc)}
      this.document = this.i.data.documentService[this.i.data.requestLast.document] as IcreateForm<UntypedFormGroup>
      this.load = true 

      setTimeout(() => {
  
        this.i.actionsEmitter.emit('documentOpen')
     
      }, 500);
      
    })

  }

}

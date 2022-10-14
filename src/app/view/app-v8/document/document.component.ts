import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  createForm!: IcreateForm<FormGroup>;

  constructor(
    public i: InterfaceService,
    private route: ActivatedRoute

  ) { 

  }

  ngOnInit(): void {
    console.log('Document')
    this.inscription = this.route.data.subscribe((document) => {
      const doc = document['response']
      this.i.actionsEmitter.emit('documentCloset')
      this.load = false
      console.log(doc)
    
      this.createForm = this.i.data.createFormDocument(this.i.data.requestLast, doc)

      setTimeout(() => {
        console.log('SET TIMEOUT')
        this.load = true
        this.i.actionsEmitter.emit('documentOpen')
      }, 500);
    })

  }

}

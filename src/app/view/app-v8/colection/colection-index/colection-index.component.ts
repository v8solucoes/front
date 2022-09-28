import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Icolection, Imodel, Irequest } from '@domain/interface';
import { InterfaceService } from '@view/app-v8/interface.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-colection-index',
  templateUrl: './colection-index.component.html',
  styleUrls: ['./colection-index.component.scss']
})
export class ColectionIndexComponent implements OnInit {

  load = false
  document: Irequest['document']
  model!: Imodel
  colections!: Icolection
  inscription!: Subscription

  constructor(
    public i: InterfaceService,
    private route: ActivatedRoute

  ) { 
    this.document = this.i.data.requestLast.document
    this.model = this.i.data.model[this.document]
  }

  ngOnInit(): void {

    console.log('Colection')

    this.inscription = this.route.data.subscribe((colection) => {

     const dataColection = {[`${this.document}`]:colection['request']} as Icolection

     this.i.data.colection = dataColection
     this.colections = dataColection
   
      console.log(colection['request'])
      console.log(this.model)

      this.load = true
    })

  }

}

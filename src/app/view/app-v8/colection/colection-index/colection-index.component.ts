import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Icolection, Irequest } from '@domain/interface';
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
  colections!: Icolection
  inscription!: Subscription

  constructor(
    public i: InterfaceService,
    private route: ActivatedRoute

  ) { 
    this.document = this.i.data.requestLast.document
  }

  ngOnInit(): void {

    console.log('Colection')

    this.inscription = this.route.data.subscribe((colection) => {

     const dataColection = {[`${this.document}`]:colection['request']} as Icolection

     this.i.data.colection = dataColection
     this.colections = dataColection
   
      console.log(colection['request'])
      this.load = true
    })

  }

}

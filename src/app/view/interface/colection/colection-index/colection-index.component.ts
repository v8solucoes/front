import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Icol } from '@domain/interface';
import { InterfaceService } from '@view/app-v8/interface.service';
import { Subscription } from 'rxjs';
import { _debug } from '../../../../../../../domain/src/domain/repository/debug';

@Component({
  selector: 'app-colection-index',
  templateUrl: './colection-index.component.html',
  styleUrls: ['./colection-index.component.scss']
})
export class ColectionIndexComponent implements OnInit {
 
 @ViewChild('document') document: any;
  load = false
  colections!: Icol
  inscription!: Subscription
  text = this.i.data.local.text.action[this.i.data.language]
  constructor(
    public i: InterfaceService,
    private route: ActivatedRoute

  ) { 

    this.inscription = this.route.data.subscribe(({ response }) => {
      
      if (_debug.pg.document) {
        console.log('Colection')
      }

      this.i.data.local.colection[`${this.i.data.requestLast.document}`] = response
      this.colections = response
      this.load = true
        console.log(this.colections)
    })
  }
  ngOnInit(): void { }
  data(date: any): Date {
   const secunds = date._dateLastUpdate._seconds
/*     console.log(secunds)
    console.log( new Date())
    console.log( new Date(secunds)) */
    return new Date(secunds)
  }

}

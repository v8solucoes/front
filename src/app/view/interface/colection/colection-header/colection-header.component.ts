import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Icol } from '@domain/interface';
import { _debug } from '@repositoryDomain/debug';
import { InterfaceService } from '@view/interface/interface.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-colection-header',
  templateUrl: './colection-header.component.html',
  styleUrls: ['./colection-header.component.scss']
})
export class ColectionHeaderComponent implements OnInit {

 /*  @ViewChild('document') document: any; */
  load = false
  colections!: Icol
  inscription!: Subscription
  text = this.i.data.local.text.action[this.i.data.language]
  colors: string[] = []
  constructor(
    public i: InterfaceService,
    private route: ActivatedRoute

  ) { 
     this.createColors
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

  ngOnInit(): void {
  }
  get createColors() {
    const colors = []
    for (var i = 0; i < 50; i++) {

      this.colors.push(this.colorDynamic)
    }
    return
  }
  get colorDynamic() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

   return `rgb(${r}, ${g}, ${b} ,0.87)`
  }
}

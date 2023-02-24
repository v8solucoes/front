import { Component, OnDestroy } from '@angular/core';
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
export class ColectionHeaderComponent implements OnDestroy {

  colections!: Icol
  inscription!: Subscription
  text = this.i.data.local.text.action[this.i.data.language]
  colors = this.createColors
  modelName: string = ''

  constructor(
    public i: InterfaceService,
    private route: ActivatedRoute
  ) {

    this.inscription = this.route.data.subscribe(({ response }) => {

      if (_debug.pg.colection) {
        console.log('Colection')
        console.log(response)
      }
      this.modelName = i.data.local.model[i.data.requestLast.document].text[i.data.language].label
      this.i.data.local.colection[`${this.i.data.requestLast.document}`] = response
      this.colections = response
      this.i.load.colectionHeader = true 
    })
  }

  ngOnDestroy(): void {
    if (_debug.pg.colection) {
      console.log('Destroy Colection')
    }
    this.inscription.unsubscribe()
  }
  

  get createColors() {
    let colors: any[] = []
    for (var i = 0; i < 50; i++) {

      colors.push(this.colorDynamic)
    }
    return colors
  }
  get colorDynamic() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b} ,0.87)`
  }
}

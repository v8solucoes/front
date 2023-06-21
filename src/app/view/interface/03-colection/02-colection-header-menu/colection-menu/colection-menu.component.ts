import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Icol } from '@domain/interface';
import { _debug } from '@repositoryDomain/debug';
import { InterfaceService } from '@view/interface/interface.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-colection-menu',
  templateUrl: './colection-menu.component.html',
  styleUrls: ['./colection-menu.component.scss']
})
export class ColectionMenuComponent {

  colections!: Icol
  inscription!: Subscription
  text = this.i.data.local.text.action[this.i.data.language]
  colors = this.createColors
  modelName: string = ''
  loading = false

  constructor(
    @Inject(DOCUMENT)
    private document: Document,
    public i: InterfaceService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.inscription = this.route.data.subscribe(({ response }) => {

      if (_debug.pg.colection) {
        console.log('Colection')
        console.log(response)
      }
      this.modelName = i.data.local.model[i.data.subColectionOrName].text[i.data.language].label
      this.i.data.local.colection[`${this.i.data.subColectionOrName}`] = response
      this.colections = response
      this.i.load.colection = true;
      this.loading = true
    })
  }

  ngOnDestroy(): void {
    if (_debug.pg.colection) {
      console.log('Destroy Colection')
    }
    this.inscription.unsubscribe()
  }
  openWhatApp() {
/*     alert('Whatss') */
   /*  this.router.navigate([`https://www.jw.org/pt/`]) */
  /*   this.document.open('https://www.jw.org/pt/', '_blank','location=yes,height=570,width=520,scrollbars=yes,status=yes') */
    this.document.open('https://sicoop.com.br/#/home/proposals?text=2206-39328&type=&skip=0&size=10', '_blank','location=yes,scrollbars=yes,status=yes')
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

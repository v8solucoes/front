import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterfaceService } from '@view/app-v8/interface.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-colection-index',
  templateUrl: './colection-index.component.html',
  styleUrls: ['./colection-index.component.scss']
})
export class ColectionIndexComponent implements OnInit {

  load = false
  inscription!: Subscription

  constructor(
    public i: InterfaceService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {

    console.log('Colection')

    this.inscription = this.route.data.subscribe((o) => {
     /*  console.log('Route') */
      console.log(o)
 /*      this.i.data.permission = o['request']['permission']
      this.i.data.model = o['request']['model']
      console.log(this.i.data) */
      this.load = true
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Icolection, Ilanguage, ImodelUndefinedProperty, Ipermission, Irequest } from '@domain/interface';
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

  permission!: Ipermission[];
  model!: ImodelUndefinedProperty;
  language!: Ilanguage;
  colection!: any

  constructor(
    public i: InterfaceService,
    private route: ActivatedRoute

  ) { 
    this.document = this.i.data.requestLast.document

  }

  ngOnInit(): void {

    console.log('Colection')

    this.inscription = this.route.data.subscribe((colection) => {

     this.i.data.colection[`${this.document}`] = colection['request'] 
      console.log(this.get)

      this.load = true
    })

  }
  get get() {
    return this.i.data.getColectionDocumentPermission(this.document)
  }

}

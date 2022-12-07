import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    public i: InterfaceService,
    private route: ActivatedRoute

  ) {

  }

  ngOnInit(): void {

    console.log('Document')

    this.inscription = this.route.data.subscribe((document) => {

      this.i.actionsEmitter.emit('documentCloset')

      this.load = true

      setTimeout(() => {

        this.i.actionsEmitter.emit('documentOpen')

      }, 500);

    })

  }

}

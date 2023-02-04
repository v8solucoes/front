import { InterfaceService } from '@view/interface/interface.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-nav',
  templateUrl: './document-nav.component.html',
  styleUrls: ['./document-nav.component.scss']
})
export class DocumentNavComponent implements OnInit {

  constructor(public i:InterfaceService) { }

  ngOnInit(): void {
  }

}

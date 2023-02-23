import { InterfaceService } from '@view/interface/interface.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-header',
  templateUrl: './document-header.component.html',
  styleUrls: ['./document-header.component.scss']
})
export class DocumentHeaderComponent implements OnInit {

  constructor(public i: InterfaceService) { }

  ngOnInit(): void {
  }

}

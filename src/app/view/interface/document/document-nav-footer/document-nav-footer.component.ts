import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '@view/interface/interface.service';

@Component({
  selector: 'app-document-nav-footer',
  templateUrl: './document-nav-footer.component.html',
  styleUrls: ['./document-nav-footer.component.scss']
})
export class DocumentNavFooterComponent implements OnInit {

  constructor(public i: InterfaceService) { }

  ngOnInit(): void {
  }

}

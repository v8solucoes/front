import { InterfaceService } from './../../interface.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-footer',
  templateUrl: './document-footer.component.html',
  styleUrls: ['./document-footer.component.scss']
})
export class DocumentFooterComponent implements OnInit {

  constructor(public i: InterfaceService) { }

  ngOnInit(): void {
  }

}

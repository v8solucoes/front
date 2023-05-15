import { Component } from '@angular/core';
import { InterfaceService } from '@view/interface/interface.service';

@Component({
  selector: 'app-document-nav-top',
  templateUrl: './document-nav-top.component.html',
  styleUrls: ['./document-nav-top.component.scss']
})
export class DocumentNavTopComponent {

  name: string = '...'
  constructor(public i: InterfaceService) { 
    
    setTimeout(() => {
       this.name = this.i.document.name
    }, 200);
   
  }

}

import { Component, Input } from '@angular/core';
import { InterfaceService } from '@view/interface/interface.service';

@Component({
  selector: 'app-pendency',
  templateUrl: './pendency.component.html',
  styleUrls: ['./pendency.component.scss']
})
export class PendencyComponent {
  
  @Input() title = 'Título'
  @Input() pendency = false

  constructor(
    public i: InterfaceService
  ) {
  }

  ngOnInit(): void {
  /*   console.log('Form Group')
    console.log(this.permission)
    console.log(this.model)
    console.log(this.form.controls) */
  }
  status(){
    this.pendency = !this.pendency
  }
}

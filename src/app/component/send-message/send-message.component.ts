import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InterfaceService } from '@view/interface/interface.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent  implements OnInit {
  @Input() title = 'Título'
  @Input() message = 'Descrição'
  formMessage = new FormControl(this.message);
  link = 'https://wa.me//5522997022828?text=Descrição'
  loading = false;
  constructor(
  public  i: InterfaceService
  ){

  }
  ngOnInit(): void {
    const desc = this.message
    const edit = desc?.replaceAll('#nomeCompleto', `${this.i.data.lastFirstName}` )
    this.formMessage.setValue(edit!)
    this.link =  `https://wa.me//5522997022828?text=${edit}`
    this.loading = true;
  }
edit(){
this.link = `https://wa.me//5522997022828?text=${this.formMessage.value}`
}
}

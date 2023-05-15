import { Component, Input, OnInit } from '@angular/core';
import { BulkWriterError } from '@google-cloud/firestore';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() title = 'Título'
  @Input() description = 'Descrição'
  @Input() status:number = 100

  color: string = 'blue';

  constructor() {

  }

  ngOnInit(): void {

    this.color = this.colorStatus(this.status)

  }

  colorStatus(status: number): string {

    if (status < 30) { return 'red' }
    if (status > 29 && status < 70) { return 'maroon' }
    if (status > 69 && status < 80) { return 'purple' }

    return 'green'
  }

}

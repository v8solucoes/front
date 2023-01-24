import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 rgb: string = 'rgb(25,30,81)'
  constructor(
  ) { }

  ngOnInit(): void {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    this.rgb = `rgb(${r}, ${g}, ${b} ,0.87)`

    console.log(Math.floor(Math.random() * 256))

  }
}

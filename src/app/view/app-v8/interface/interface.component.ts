import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from 'src/app/api/firebase-auth.service';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent implements OnInit {


  constructor(
   public auth: FirebaseAuthService
  ) { }

  ngOnInit(): void {

/* console.log(this.auth.onAuthState()) */
  }


}

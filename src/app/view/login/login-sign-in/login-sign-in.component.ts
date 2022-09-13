import { Component, OnInit } from '@angular/core';
import { IcreateForm } from '@domain/interface';
import { DataService } from '@repository/data.service';
import { FirebaseAuthService } from 'src/app/api/firebase-auth.service';

@Component({
  selector: 'app-login-sign-in',
  templateUrl: './login-sign-in.component.html',
  styleUrls: ['./login-sign-in.component.scss']
})
export class LoginSignInComponent implements OnInit {

  loading = false;

  login: IcreateForm<any>;

  constructor(
/*     private auth: FirebaseAuthService, */
    public data: DataService,
    
  ) {

    this.login = this.data.createForm('sign-in')
    
  }

  ngOnInit(): void {
    this.loading = true;
    
  }

}

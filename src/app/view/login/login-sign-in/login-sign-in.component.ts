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
    public auth: FirebaseAuthService,
    public data: DataService,
    
  ) {

    this.login = this.data.createForm('sign-in')
    
  }

  ngOnInit(): void {
    this.loading = true;
    
  }
 get signIn() {
    const login = this.login.form.get(['sign-in', 'email']).value
    const password = this.login.form.get(['sign-in', 'password']).value
    const language = this.login.request.language
   return this.auth.loginIn(login,password,language)
  }

}

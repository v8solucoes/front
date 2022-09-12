import { Component, OnInit } from '@angular/core';
import { IcreateForm } from '@domain/interface';
import { DataService } from '@repository/data.service';
import { FirebaseAuthService } from 'src/app/api/firebase-auth.service';

@Component({
  selector: 'app-login-index',
  templateUrl: './login-index.component.html',
  styleUrls: ['./login-index.component.scss']
})
export class LoginIndexComponent implements OnInit {

  loading = false;

  login: IcreateForm<any>;

  constructor(
    private auth: FirebaseAuthService,
    public data: DataService,
    
  ) {

    this.login = this.data.createForm('login')
    
  }

  ngOnInit(): void {
    this.loading = true;
  }

}

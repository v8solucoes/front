import { Idoc } from './../../../../../../domain/src/shared/interface';
import { FormService } from '@component/form/form.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@repository/data.service';
import { FirebaseAuthService } from 'src/app/api/firebase-auth.service';
import { _debug } from '../../../../../../domain/src/domain/repository/debug';

@Component({
  selector: 'app-login-sign-in',
  templateUrl: './login-sign-in.component.html',
  styleUrls: ['./login-sign-in.component.scss']
})
export class LoginSignInComponent implements OnInit {

  loading = false;
  document: keyof Idoc = 'sign-in'

  constructor(
    public auth: FirebaseAuthService,
    public data: DataService,
    public form: FormService,
    private route: ActivatedRoute

  ) {

  }

  ngOnInit(): void {

    this.route.data.subscribe(req => {

      if (_debug.pg.login) {
        console.log('login')
        console.log(this.data.form)
      }

      this.loading = true;

    }).closed

  }
  get signIn() {
    const login = this.data.form[this.data.requestLast.document].get(['sign-in', 'email'])?.value
    const password = this.data.form[this.data.requestLast.document]?.get(['sign-in', 'password'])?.value
    const language = this.data.language
    return this.auth.loginIn(login, password, language)
  }

}

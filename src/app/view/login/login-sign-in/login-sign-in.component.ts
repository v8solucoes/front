import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@repository/data.service';
import { _debug } from '@repositoryDomain/debug';
import { Idoc } from '@domain/interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-sign-in',
  templateUrl: './login-sign-in.component.html',
  styleUrls: ['./login-sign-in.component.scss'],
})
export class LoginSignInComponent implements OnInit {

  load = false;
  document: keyof Idoc = 'sign-in';

  constructor(
    public data: DataService,
    private route: ActivatedRoute

  ) {
    this.route.data.subscribe(req => {

      if(environment.test && this.data.exit ) {
        location.reload()
        this.data.exit = false;
      }

      this.load = true;

      if (_debug.pg.login) {
        console.log(this.document)
        console.log(this.data)
      }
      

    }).closed
  }

  ngOnInit(): void {  
   
  }

}

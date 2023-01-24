import { Component } from '@angular/core';
import { DataService } from '@repository/data.service';
import { FirebaseAuthService } from 'src/app/api/firebase-auth.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { _debug } from '../../../../../../domain/src/domain/repository/debug';


@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss'],
  
})

export class AccountCreateComponent {
  load = false
  inscription!: Subscription

  constructor(
    private auth: FirebaseAuthService,
    public data: DataService,
    private route: ActivatedRoute
  ) {
    
  }
  
  ngOnInit() {
    
    this.route.data.subscribe(req => {

      if (_debug.pg.account) {
        console.log('Account-Adm>Create')
        console.log(this.data.form)
      }
     
      this.load = true;
    }).closed

}

  async googleAuth() {
    return this.auth.googleAuth()
  }

}
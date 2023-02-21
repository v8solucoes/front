import { Component } from '@angular/core';
import { DataService } from '@repository/data.service';
import { ActivatedRoute } from '@angular/router';
import { _debug } from '@repositoryDomain/debug';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],

})

export class CreateAccountComponent {

  load = false

  constructor(
    public data: DataService,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe(req => {

      if (_debug.pg.account) {
        console.log('Account-Adm>Create')
        console.log(this.data.form)
      }

      this.load = true;

    }).closed
  }

}
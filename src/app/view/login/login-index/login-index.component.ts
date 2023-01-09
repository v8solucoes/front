import { Component, OnInit } from '@angular/core';
import { DataService } from '@repository/data.service';

@Component({
  selector: 'app-login-index',
  templateUrl: './login-index.component.html',
  styleUrls: ['./login-index.component.scss']
})
export class LoginIndexComponent implements OnInit {

  loading = false;

  constructor(

    public data: DataService,
    
  ) {  
  }

  ngOnInit(): void {
    this.loading = true;
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataLocalService } from '@repository/data-local.service';

@Component({
  selector: 'app-account-index',
  templateUrl: './account-index.component.html',
  styleUrls: ['./account-index.component.scss']
})
export class AccountIndexComponent implements OnInit {

  constructor(
    public dataLocal: DataLocalService,
    private activatedRoute: ActivatedRoute
  ) { 
    
  }

  ngOnInit(): void {
  }

}

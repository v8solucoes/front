import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataLocalService } from '@repository/data-local.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  loading = false

  language: any

  constructor(
    public dataLocal: DataLocalService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(params => {

      this.language = params

     /*  console.log(this.activatedRoute) */

      this.loading = true

    })
  }

}

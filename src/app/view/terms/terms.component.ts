import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/* import { DataLocalService } from '@repository/data-local.service'; */
import { Ilanguage } from '@shared-library/interface';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  language?: Ilanguage

  constructor(
    private activatedRoute: ActivatedRoute
  ) { 

    this.activatedRoute.url.subscribe(params => {
      this.language = params[0].path as Ilanguage

     console.log(params[0].path)

    })
  }

  ngOnInit(): void {

  }

}

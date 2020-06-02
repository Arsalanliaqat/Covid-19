import { Component, OnInit } from '@angular/core';
import { BaseSummaryComponent } from '../summary-base.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-countries-summary',
  templateUrl: './countries-summary.component.html',
  styleUrls: ['./countries-summary.component.less']
})
export class CountriesSummaryComponent extends BaseSummaryComponent implements OnInit {
  public toggleColor: string = "primary";
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  ngOnInit(): void { }

}

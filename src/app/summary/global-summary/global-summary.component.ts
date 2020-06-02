import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseSummaryComponent } from '../summary-base.component';

@Component({
  selector: 'app-global-summary',
  templateUrl: './global-summary.component.html',
  styleUrls: ['./global-summary.component.less']
})
export class GlobalSummaryComponent extends BaseSummaryComponent implements OnInit {
  public toggleColor: string = "primary";
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  ngOnInit(): void { }

}

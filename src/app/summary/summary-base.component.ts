import { HttpClient } from '@angular/common/http'
import { catchError, retry } from 'rxjs/operators';

interface CountrySummary {
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: string;
  TotalConfirmed: string;
  NewDeaths: string;
  TotalDeaths: string;
  NewRecovered: string;
  TotalRecovered: string;
  Date: string;
}

interface GlobalSummary {
  NewConfirmed: string;
  TotalConfirmed: string;
  NewDeaths: string;
  TotalDeaths: string;
  NewRecovered: string;
  TotalRecovered: string;
}

export abstract class BaseSummaryComponent {
  public errorResult;
  public globalSummary: GlobalSummary;
  public countriesSummary: CountrySummary[];

  constructor(private httpClient: HttpClient) {
    this.refreshData();
  }

  public refreshData() {
    this.errorResult = this.globalSummary = this.countriesSummary = null;
    this.httpClient
      .get('https://api.covid19api.com/summary')
      .subscribe((value: any) => {
        this.globalSummary = value.Global;
        this.countriesSummary = value.Countries;
        this.errorResult = null;

        this.countriesSummary.sort((country1, country2) => {
          if (country1.TotalConfirmed < country2.TotalConfirmed) { return 1 }
          else if (country1.TotalConfirmed > country2.TotalConfirmed) { return -1 }
          return 0;
        })
      }, (error) => {
        this.errorResult = error;
        this.countriesSummary = this.globalSummary = null;
      });
  }
}

import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface countries {
  Country: string;
  Slug: string;
  ISO2: string;
}

interface country {
  Country: string;
  CountryCode: string;
  Province: string;
  City: string;
  CityCode: string;
  Lat: string;
  Lon: string;
  Cases: string;
  Status: string;
  Date: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent {
  public toggleColor: string = "primary";
  public countriesList: countries[] = [];
  public errorCountriesList: HttpErrorResponse;
  public selectedCountry: string;
  public targetCountry: string;
  public confirmedCases: country[] = [];
  public deadthCases: country[] = [];
  public recoveredCases: country[] = [];
  public errorCountryDetails: HttpErrorResponse;

  constructor(private httpClient: HttpClient) {
    this.getCountries();
  }

  public getCountries() {
    this.errorCountriesList = this.countriesList = null;
    this.httpClient
      .get('https://api.covid19api.com/countries')
      .subscribe((value: any) => {
        this.countriesList = value;
        this.countriesList.sort((a, b) => a.Country.localeCompare(b.Country))
      }, (error) => {
        this.errorCountriesList = error;
        this.countriesList = null;
      });
  }

  public getCountryData(data?: any) {
    if (data) {
      this.targetCountry = data[0];
    }
    this.errorCountryDetails = null;
    this.confirmedCases = this.recoveredCases = this.deadthCases = [];
    this.httpClient
      .get(`https://api.covid19api.com/country/${this.targetCountry}/status/confirmed`)
      .subscribe((value: any) => {
        this.confirmedCases = value.reverse();
      }, (error) => {
        this.errorCountryDetails = error;
        this.confirmedCases = this.recoveredCases = this.deadthCases = null;
      });
    this.httpClient
      .get(`https://api.covid19api.com/country/${this.targetCountry}/status/deadths`)
      .subscribe((value: any) => {
        this.deadthCases = value.reverse();
      }, (error) => {
        this.errorCountryDetails = error;
        this.confirmedCases = this.recoveredCases = this.deadthCases = null;
      });
    this.httpClient
      .get(`https://api.covid19api.com/country/${this.targetCountry}/status/recovered`)
      .subscribe((value: any) => {
        this.recoveredCases = value.reverse();
      }, (error) => {
        this.errorCountryDetails = error;
        this.confirmedCases = this.recoveredCases = this.deadthCases = [];
      });
  }

}

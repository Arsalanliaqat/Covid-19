import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSummaryComponent } from './global-summary/global-summary.component';
import { CountriesSummaryComponent } from './countries-summary/countries-summary.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { SummaryComponent } from './summary.component';

@NgModule({
  declarations: [
    GlobalSummaryComponent,
    CountriesSummaryComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    GlobalSummaryComponent,
    CountriesSummaryComponent,
    SummaryComponent
  ]
})
export class SummaryModule { }

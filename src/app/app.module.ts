
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './component/bar-chart/bar-chart.component';
import { YearLabelPipe } from './pipes/year-label.pipe';
import { ChartModule } from 'primeng/chart';



@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    YearLabelPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

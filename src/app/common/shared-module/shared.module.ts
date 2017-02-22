import {NgModule} from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {LineChartDemoComponent} from "../chart/line/line-chart-demo";
import {BarChartDemoComponent} from "../chart/bar/bar-chart-demo";
import {BaseChartDemoComponent} from "../chart/base/base-chart-demo";
import {DoughnutChartDemoComponent} from "../chart/doughnut/doughnut-chart-demo";
import {PolarAreaChartDemoComponent} from "../chart/polar-area/polar-area-chart-demo";
import {RadarChartDemoComponent} from "../chart/radar/radar-chart-demo";
import {NgxBar} from "../ngx-charts/ngx-bar";
import {NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
  declarations:[
    LineChartDemoComponent,
    BarChartDemoComponent,
    BaseChartDemoComponent,
    DoughnutChartDemoComponent,
    PolarAreaChartDemoComponent,
    RadarChartDemoComponent,
    NgxBar
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    NgxChartsModule
  ],
  exports: [
    LineChartDemoComponent,
    BarChartDemoComponent,
    BaseChartDemoComponent,
    DoughnutChartDemoComponent,
    PolarAreaChartDemoComponent,
    RadarChartDemoComponent,
    NgxBar
  ]
})
export class SharedModule { }

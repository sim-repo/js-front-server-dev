import {NgModule} from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {LineChartDemoComponent} from "../charts/chart/line/line-chart-demo";
import {BarChartDemoComponent} from "../charts/chart/bar/bar-chart-demo";
import {BaseChartDemoComponent} from "../charts/chart/base/base-chart-demo";
import {DoughnutChartDemoComponent} from "../charts/chart/doughnut/doughnut-chart-demo";
import {PolarAreaChartDemoComponent} from "../charts/chart/polar-area/polar-area-chart-demo";
import {RadarChartDemoComponent} from "../charts/chart/radar/radar-chart-demo";

import {NgxChartsModule} from '@swimlane/ngx-charts';
import {NgxBarHorizontal} from "../charts/ngx-charts/bar/horizontal/ngx-bar-horizontal";
import {NgxBarVertical} from "../charts/ngx-charts/bar/vertical/ngx-bar-vertical";
import {
  NgxBarGroupedVertical
} from "../charts/ngx-charts/bar/grouped-vertical/ngx-bar-grouped-vertical";
import {NgxBarNormVertical} from "../charts/ngx-charts/bar/normalized-vertical/ngx-bar-norm-vertical";
import {NgxSimplePie} from "../charts/ngx-charts/pie/simple-pie/simple-pie";
import {NgxPieAdv} from "../charts/ngx-charts/pie/adv-pie/adv-pie";
import {NgxGridPie} from "../charts/ngx-charts/pie/grid-pie/grid-pie";
import {NgxLineSimple} from "../charts/ngx-charts/line/simple/ngx-line-simple";
import {NgxLineArea} from "../charts/ngx-charts/line/area/ngx-line-area";
import {NgxMapHit} from "../charts/ngx-charts/map/hit-map/ngx-map-hit";
import {NgxMapTree} from "../charts/ngx-charts/map/tree-map/ngx-map-tree";
import {NgxMapNumber} from "../charts/ngx-charts/map/number-map/ngx-map-number";
import {NgxGauge} from "../charts/ngx-charts/gauge/ngx-gauge";
import { ChartModule } from 'angular2-highcharts';
import {HSimple} from "../charts/highcharts/simple/h-simple";
import {HSelectionEvent} from "../charts/highcharts/selection-event/h-selection-event";
import {HDynamics} from "../charts/highcharts/dynamic/h-dynamic";
import {HHighStock} from "../charts/highcharts/highstock/h-highstock";
import {D3BarchartComponent} from "../charts/d3/barchart.component";

@NgModule({
  declarations:[
    LineChartDemoComponent,
    BarChartDemoComponent,
    BaseChartDemoComponent,
    DoughnutChartDemoComponent,
    PolarAreaChartDemoComponent,
    RadarChartDemoComponent,

    NgxBarVertical,
    NgxBarHorizontal,
    NgxBarGroupedVertical,
    NgxBarNormVertical,
    NgxSimplePie,
    NgxPieAdv,
    NgxGridPie,
    NgxLineSimple,
    NgxLineArea,
    NgxMapHit,
    NgxMapTree,
    NgxMapNumber,
    NgxGauge,

    HSimple,
    HSelectionEvent,
    HDynamics,
    HHighStock,

    D3BarchartComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    NgxChartsModule,
    ChartModule
   // ChartModule.forRoot(
    //  require('../../../../node_modules/highcharts/highstock.src'),
     // require('../../../../node_modules/highcharts/highcharts-3d.src.js')
   // )
  ],
  exports: [
    LineChartDemoComponent,
    BarChartDemoComponent,
    BaseChartDemoComponent,
    DoughnutChartDemoComponent,
    PolarAreaChartDemoComponent,
    RadarChartDemoComponent,
    NgxBarVertical,
    NgxBarHorizontal,
    NgxBarGroupedVertical,
    NgxBarNormVertical,
    NgxSimplePie,
    NgxPieAdv,
    NgxGridPie,
    NgxLineSimple,
    NgxLineArea,
    NgxMapHit,
    NgxMapTree,
    NgxMapNumber,
    NgxGauge,
    HSimple,
    HSelectionEvent,
    HDynamics,
    HHighStock,
    D3BarchartComponent
  ]
})
export class SharedModule { }

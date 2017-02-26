//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single, multi} from './data';
import {COLOR_SCHEME} from "../../../char.const";

@Component({
  selector: 'ngx-pie-grid',
  template: `
    <ngx-charts-pie-grid
      [view]="view"
      [scheme]="colorScheme"
      [results]="single"
      (select)="onSelect($event)">
    </ngx-charts-pie-grid>
  `
})
export class NgxGridPie {
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = COLOR_SCHEME;

  // line, area
  autoScale = true;

  constructor() {
    Object.assign(this, {single, multi})
  }

  onSelect(event) {
    console.log(event);
  }

}


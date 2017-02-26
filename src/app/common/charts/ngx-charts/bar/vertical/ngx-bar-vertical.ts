//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {single} from './data';
import {COLOR_SCHEME} from "../../../char.const";

@Component({
  selector: 'ngx-bar-vertical',
  template: `
    <ngx-charts-bar-vertical
      [view]="view"
      [scheme]="colorScheme"
      [results]="single"
      [gradient]="gradient"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      (select)="onSelect($event)">
    </ngx-charts-bar-vertical>
  `
})
export class NgxBarVertical {
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

  constructor() {
    Object.assign(this, {single})
  }

  onSelect(event) {
    console.log(event);
  }
}

//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {multi} from './data';
import {COLOR_SCHEME} from "../../../char.const";

@Component({
  selector: 'ngx-map-hit',
  template: `
    <ngx-charts-heat-map
      [view]="view"
      [scheme]="colorScheme"
      [results]="multi"
      [legend]="showLegend"
      [gradient]="gradient"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      (select)="onSelect($event)">
    </ngx-charts-heat-map>
  `
})
export class NgxMapHit {
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
    Object.assign(this, {multi})
  }

  onSelect(event) {
    console.log(event);
  }

}


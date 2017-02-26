/**
 * Created by User on 23.02.2017.
 */
//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single} from './data';
import {COLOR_SCHEME} from "../../char.const";

@Component({
  selector: 'ngx-gauge',
  template: `
    <ngx-charts-gauge
      [view]="view"
      [scheme]="colorScheme"
      [results]="data"
      [min]="0"
      [max]="100"
      [angleSpan]="240"
      [startAngle]="-120"
      [units]="'alerts'"
      [bigSegments]="10"
      [smallSegments]="5"
      (select)="onSelect($event)">
    </ngx-charts-gauge>
  `
})
export class NgxGauge {
  view: any[] = [700, 400];
  data: any[];

  constructor() {
    this.data = single;
  }

  colorScheme = COLOR_SCHEME;

  onSelect(event) {
    console.log(event);
  }
}


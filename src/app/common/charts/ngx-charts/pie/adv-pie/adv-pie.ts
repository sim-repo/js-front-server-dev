//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single, multi} from './data';
import {COLOR_SCHEME} from "../../../char.const";

@Component({
  selector: 'ngx-pie-adv',
  template: `
    <ngx-charts-advanced-pie-chart
      [view]="view"
      [scheme]="colorScheme"
      [results]="single"
      [gradient]="gradient"
      (select)="onSelect($event)">
    </ngx-charts-advanced-pie-chart>
  `
})
export class NgxPieAdv {
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  colorScheme = COLOR_SCHEME;

  constructor() {
    Object.assign(this, {single, multi})
  }

  onSelect(event) {
    console.log(event);
  }

}


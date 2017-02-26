//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single, multi} from './data';
import {COLOR_SCHEME} from "../../../char.const";

@Component({
  selector: 'ngx-pie-simple',
  template: `
    <ngx-charts-pie-chart
      [view]="view"
      [scheme]="colorScheme"
      [results]="single"
      [legend]="showLegend"
      [explodeSlices]="explodeSlices"
      [labels]="showLabels"
      [doughnut]="doughnut"
      [gradient]="gradient"
      (select)="onSelect($event)">
    </ngx-charts-pie-chart>
  `
})
export class NgxSimplePie {
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showLegend = true;

  colorScheme = COLOR_SCHEME;

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  constructor() {
    Object.assign(this, {single, multi})
  }

  onSelect(event) {
    console.log(event);
  }

}

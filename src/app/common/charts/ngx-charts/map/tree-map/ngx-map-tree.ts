//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single} from './data';
import {COLOR_SCHEME} from "../../../char.const";

@Component({
  selector: 'ngx-map-tree',
  template: `
    <ngx-charts-tree-map
      [view]="view"
      [scheme]="colorScheme"
      [results]="single"
      (select)="onSelect($event)">
    </ngx-charts-tree-map>
  `
})
export class NgxMapTree {
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  colorScheme = COLOR_SCHEME;

  constructor() {
    Object.assign(this, {single})
  }

  onSelect(event) {
    console.log(event);
  }

}

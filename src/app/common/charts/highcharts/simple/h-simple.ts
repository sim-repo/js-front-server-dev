import { Component } from '@angular/core';

@Component({
  selector: 'simple-chart-example',
  template: `
        <chart [options]="options"></chart>
    `
})
export class HSimple {
  constructor() {
    this.options = {
      title : { text : 'simple chart' },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2],
      }]
    };
  }
  options: Object;
}/**
 * Created by User on 23.02.2017.
 */

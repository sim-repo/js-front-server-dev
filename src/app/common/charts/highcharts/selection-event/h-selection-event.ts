import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component }    from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { ChartModule }            from 'angular2-highcharts';

@Component({
  selector: 'h-selection-event',
  styles: [`
      chart {
        display: block;
      }
    `],
  template: `
      <chart [options]="options" 
             (selection)="onChartSelection($event)">  
      </chart>
      <p>selection from <b>{{from}}</b> to <b>{{to}}</b></p> 
    `
})
export class HSelectionEvent {
  from: any;
  to: any;
  constructor() {
    this.options = {
      title : { text : 'chart selection event example' },
      chart: { zoomType: 'x'},
      series: [{ data: [29.9, 71.5, 106.4, 129.2, 45,13,120], }]
    };
  }
  options: Object;
  onChartSelection (e) {
    this.from = e.originalEvent.xAxis[0].min.toFixed(2);
    this.to = e.originalEvent.xAxis[0].max.toFixed(2);
  }
}


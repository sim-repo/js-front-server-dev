import { platformBrowserDynamic }  from '@angular/platform-browser-dynamic';
import { NgModule, Component }     from '@angular/core';
import { HttpModule,Http }              from '@angular/http';
import { BrowserModule }           from '@angular/platform-browser';
import { ChartModule }             from 'angular2-highcharts';


@Component({
  selector: 'h-highstock',
  styles: [`
      chart {
        display: block; 
      }
    `],
  template: `<chart type="StockChart" [options]="options"></chart>`
})
export class HHighStock {
  constructor(private http: Http) {
    http.get('https://cdn.rawgit.com/gevgeny/angular2-highcharts/99c6324d/examples/aapl.json').subscribe(res => {
      this.options = {
        title : { text : 'AAPL Stock Price' },
        series : [{
          name : 'AAPL',
          data : res.json(),
          tooltip: {
            valueDecimals: 2
          }
        }]
      };
    });
  }
  options: Object;
}



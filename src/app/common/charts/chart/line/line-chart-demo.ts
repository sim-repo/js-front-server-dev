import {Component, Injectable, Inject, Input} from '@angular/core';
import {AxisY} from "../../../../model/admin-model/axis-y";
import {AComponent} from "../../../acomponent";
import {Mediator} from "../../../../event/mediator";
import {InMemoryService} from "../../../../memory/in-memory";
import {AnyEvent} from "../../../../event/any.event";
import {MyEvent} from "../../../../model/my-event";
import {Axis} from "../../../../model/admin-model/axis";

@Component({
  selector: 'line-chart-demo',
  templateUrl: 'line-chart-demo.html'
})

export class LineChartDemoComponent extends AComponent{

  axis: Axis;

  public lineChartData:Array<any> = [
    {data: [65,75], label: 'Series A'}
  ];

  public lineChartLabels:Array<any>;


  constructor(
    public anyevent: AnyEvent,
    public inmemory: InMemoryService,
    public mediator: Mediator
  ){
    super(anyevent, inmemory, mediator, LineChartDemoComponent.name);
    this.lineChartLabels = new Array();
    for(var i=0;i<8;i++)
      this.lineChartLabels.push(i);
  }

  ngOnInit(){
    super.register();
  }

  protected assign(_event: MyEvent) {
    if (_event.model_class === 'axis') {
      this.setOwnModel(_event.data);
    }
  }

  protected getOwnModel(): any {
    return null;
  }

  protected setOwnModel(_data: any) {
    this.axis = _data;

    // axis Y
    let len = this.axis.axisY.length;
    let bufY:Array<any> = new Array(len);
    for (let i = 0; i < len; i++) {
      let len2 = this.axis.axisY[i].data.length;
      bufY[i] = {data: new Array(len2), label: this.axis.axisY[i].label};
      for(let j=0;j<len2;j++){
        bufY[i].data[j] = this.axis.axisY[i].data[j];
      }
    }

    this.lineChartData = bufY;


    // axis X
    len = this.axis.axisX.length;
    let bufX:Array<string> = new Array(len);
    for (let i = 0; i < len; i++)
      bufX[i] = this.axis.axisX[i];

    this.lineChartLabels = new Array(len);
    for(let i = 0; i < len; i++){
      this.lineChartLabels.push(bufX[i]);
    }

  }

  protected doEmit() {
  }

  protected doRoute() {
  }

  protected doShow() {
  }

  protected doHide() {
  }

  public lineChartOptions:any = {
    responsive: true
  };

  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}

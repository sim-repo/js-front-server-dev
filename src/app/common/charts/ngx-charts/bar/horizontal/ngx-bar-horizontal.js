"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var data_1 = require('./data');
var NgxBarChartHorizontal = (function () {
    function NgxBarChartHorizontal() {
        this.view = [700, 400];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        Object.assign(this, { single: data_1.single, multi: data_1.multi });
    }
    NgxBarChartHorizontal.prototype.onSelect = function (event) {
        console.log(event);
    };
    NgxBarChartHorizontal = __decorate([
        core_1.Component({
            selector: 'ngx-bar-chart-horizontal',
            template: "\n    <ngx-charts-bar-horizontal\n      [view]=\"view\"\n      [scheme]=\"colorScheme\"\n      [results]=\"single\"\n      [gradient]=\"gradient\"\n      [xAxis]=\"showXAxis\"\n      [yAxis]=\"showYAxis\"\n      [legend]=\"showLegend\"\n      [showXAxisLabel]=\"showXAxisLabel\"\n      [showYAxisLabel]=\"showYAxisLabel\"\n      [xAxisLabel]=\"xAxisLabel\"\n      [yAxisLabel]=\"yAxisLabel\"\n      (select)=\"onSelect($event)\">\n    </ngx-charts-bar-horizontal>\n  "
        })
    ], NgxBarChartHorizontal);
    return NgxBarChartHorizontal;
}());
exports.NgxBarChartHorizontal = NgxBarChartHorizontal;

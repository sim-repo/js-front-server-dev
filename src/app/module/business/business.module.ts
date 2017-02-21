import { NgModule } from "@angular/core";
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import {BusinessComponent} from "./business.component";
import {BusinessRoutingModule} from "./business-routing.module";
import {UserReportsComponent} from "./children/user-reports.component";
import {BusinessService} from "./business.service";
import {MaterialModule} from "@angular/material";
import {PaginationModule} from 'ng2-bootstrap';

import {HttpService} from "../../http/http.service";
import {BACKEND_URL_LIST, URLs} from "../../http/link.const";
import {PaginatePipe, SortPipe} from "../../common/pipes";



@NgModule({
  imports:[
  CommonModule,
  PaginationModule.forRoot(),
  FormsModule,
  ReactiveFormsModule,
  MaterialModule.forRoot(),
  BusinessRoutingModule,

  ],
  declarations:[
    BusinessComponent,
    UserReportsComponent,
    PaginatePipe,
    SortPipe
  ],
  providers:[BusinessService]
})

export class BusinessModule{
  errorMessage: string;
  constructor(private loader: HttpService,
              private busService: BusinessService){
    this.lazyLoading();
  }

  private lazyLoading(){
    this.loader.getData(BACKEND_URL_LIST[URLs.USER_REPORTS].url)
      .subscribe(
        data=>{this.busService.reports=data;},
        error=>this.errorMessage = <any>error
      )
  }
}

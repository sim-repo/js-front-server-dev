import {NgModule} from "@angular/core";
import { CommonModule }   from '@angular/common';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';

import {ApiComponent} from "./api.component";
import {ApiRoutingModule} from "./api-routing.module";
import {MaterialModule} from "@angular/material";
import {ApiService} from "./api.service";
import {HttpService} from "../../http/http.service";
import {URLs, BACKEND_URL_LIST} from "../../http/link.const";
import {SafePipe} from "../../common/pipes";
import {ApiEditorComponent} from "./children/editor/api-editor.component";
import {ApiEditorService} from "./children/editor/api-editor.service";
import {ApiEditor} from "../../model/api-model/ApiEditor";
import {ApiItemService} from "./children/api-item.service";
import {ApiItemComponent} from "./children/items/api-item.components";

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ApiRoutingModule
  ],
  declarations:[
    ApiComponent,
    ApiEditorComponent,
    ApiItemComponent,
    SafePipe
  ],
  providers:[
    ApiService,
    ApiEditorService,
    ApiItemService
  ]
})

export class ApiModule{
  errorMessage: string;
  apiEditorData : ApiEditor = new ApiEditor();

  constructor(private loader: HttpService,
              private apiService: ApiService,
              private apiItemService: ApiItemService
  ){
    this.lazyLoading();
  }


  private lazyLoading(){

    this.loader.getData(BACKEND_URL_LIST[URLs.API].url)
      .subscribe(
        data=>{this.apiService.api=data;},
        error=>this.errorMessage = <any>error
      )

    this.loader.getData(BACKEND_URL_LIST[URLs.API_ITEMS].url)
      .subscribe(
        data=>{this.apiItemService.dataset=data;},
        error=>this.errorMessage = <any>error
      )
  }
}

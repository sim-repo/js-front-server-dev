import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {MaterialModule} from '@angular/material';
import 'hammerjs';
import { FlexLayoutModule} from "@angular/flex-layout";

import {AppComponent} from "./app.component";
import {HttpService} from "./http/http.service";
import {Mediator} from "./event/mediator";
import {InMemoryService} from "./memory/in-memory";
import {NewsService} from "./module/news/news.service";
import {BACKEND_URL_LIST, URLs} from "./http/link.const";
import {TabComponent} from "./tab/tab.component";
import {PageNotFoundComponent} from "./common/page-not-found.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {AppRoutingModule} from "./app-routing.module";
import {NewsModule} from "./module/news/news.module";
import {BusinessModule} from "./module/business/business.module";
import {ApiModule} from "./module/api/api.module";
import {AdminModule} from "./module/admin/admin.module";
import {Broadcaster} from "./event/broadcaster";
import {AnyEvent} from "./event/any.event";
import {TabService} from "./tab/tab.service";
import {BarchartComponent} from "./common/d3/barchart.component";


@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    SidenavComponent,
    PageNotFoundComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule,
   // FlexLayoutModule,
    AdminModule,
    ApiModule,
    BusinessModule,
    NewsModule,
    AppRoutingModule
  ],
  providers: [
    HttpService,
    AnyEvent,
    Broadcaster,
    InMemoryService,
    Mediator,
    TabService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

  errorMessage: string;
  constructor(private loader: HttpService,
              private mediator: Mediator,
              private inmemory: InMemoryService,
              private newsService: NewsService,
              private tabService: TabService){
    this.eagerLoading()}

  private eagerLoading(){


    this.loader.getData(BACKEND_URL_LIST[URLs.ACTIONS_GROUPS].url)
      .subscribe(
        data=>this.inmemory.agroups=data,
        error=>this.errorMessage = <any>error
      )

    this.loader.getData(BACKEND_URL_LIST[URLs.ACTIONS].url)
      .subscribe(
        data=>this.inmemory.actions=data,
        error=>this.errorMessage = <any>error
      )

    this.loader.getData(BACKEND_URL_LIST[URLs.FILTER_GROUPS].url)
      .subscribe(
        data=>{
          this.inmemory.fgroups=data;
          for(var i=0, len=this.inmemory.fgroups.length; i<len;i++) {
            for(var j=0, len2=this.inmemory.fgroups[i].items.length; j<len2; j++) {
              this.inmemory.fitems.set(this.inmemory.fgroups[i].items[j].id,this.inmemory.fgroups[i].items[j]);
            }
          }
        },
        error=>this.errorMessage = <any>error
      )

    this.loader.getData(BACKEND_URL_LIST[URLs.EVENTS].url)
      .subscribe(
        data => {
          this.inmemory.events = data;
          this.loader.getData(BACKEND_URL_LIST[URLs.FILTER_RELATIONS].url)
            .subscribe(
              data2=>this.inmemory.frelations=data2,
              error => this.errorMessage = <any>error
            )
          this.loader.getData(BACKEND_URL_LIST[URLs.NEWS].url)
            .subscribe(
              data => {this.newsService.news = data; this.mediator.emitByAgroup(3, 'News', data);},
              error => this.errorMessage = <any>error

            )
          this.loader.getData(BACKEND_URL_LIST[URLs.TAB].url)
            .subscribe(
              data=>{this.tabService.tab = data; this.mediator.emitByAgroup(4, 'Tab', data);},
              error=>this.errorMessage = <any>error
            )
        },
        error => this.errorMessage = <any>error
      )
  }

}

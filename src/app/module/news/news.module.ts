import {NgModule} from "@angular/core";
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '@angular/material';


import {NewsComponent} from "./news.component";
import {NewsRoutingModule} from "./news-routing.module";
import {NewsChild1Component} from "./children/news-child1.component";
import {NewsService} from "./news.service";
import {NewsChild2Component} from "./children/news-child2.component";


@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    MaterialModule.forRoot(),
    NewsRoutingModule
  ],
  declarations:[
    NewsComponent,
    NewsChild1Component,
    NewsChild2Component
  ],
  providers:[NewsService]
})


export class NewsModule{
  constructor(){
    console.log('NewModule loading..');
  }
}

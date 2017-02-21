import {NgModule} from "@angular/core";
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import {ApiComponent} from "./api.component";
import {ApiRoutingModule} from "./api-routing.module";
import {ApiChild1Component} from "./children/api-child1.component";

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    ApiRoutingModule
  ],
  declarations:[
    ApiComponent,
    ApiChild1Component
  ],
  providers:[]
})

export class ApiModule{}

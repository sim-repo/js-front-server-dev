import {NgModule} from "@angular/core";
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule,FormsModule }    from '@angular/forms';

import {AdminComponent} from "./admin.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminChild1Component} from "./children/admin-child1.component";
import {AdminService} from "./admin.service";
import {HttpService} from "../../http/http.service";
import {BACKEND_URL_LIST, URLs} from "../../http/link.const";
import {MaterialModule} from "@angular/material";
import {SharedModule} from "../../common/shared-module/shared.module";
import {AdminChild2Component} from "./children/admin-child2.component";
import {AdminChild3Component} from "./children/admin-child3.component";
import {AdminChild4Component} from "./children/admin-child4.component";
import {AdminJvmService} from "./children/admin-jvm-service";
import {AdminJvmComponent} from "./children/admin-jvm.component";



@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations:[
    AdminComponent,
    AdminChild1Component,
    AdminChild2Component,
    AdminChild3Component,
    AdminChild4Component,
    AdminJvmComponent
  ],
  providers:[AdminService,AdminJvmService]
})

export class AdminModule{
  errorMessage: string;
  constructor(private loader: HttpService,
              private adminService: AdminService
              ){
    this.lazyLoading();
  }

  private lazyLoading(){
    this.loader.getData(BACKEND_URL_LIST[URLs.ADMIN].url)
      .subscribe(
        data=>{this.adminService.admins=data;},
        error=>this.errorMessage = <any>error
      )
  }
}

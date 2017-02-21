import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {BusinessComponent} from "./business.component";
import {UserReportsComponent} from "./children/user-reports.component";

const routes2: Routes = [
  { path: 'business',  component: BusinessComponent },
  { path: 'business/:id', component: UserReportsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes2)
  ],
  exports: [
    RouterModule
  ]
})
export class BusinessRoutingModule {
  constructor(){
    console.log('BusinessRoutingModule');
  }
}


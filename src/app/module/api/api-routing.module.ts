import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ApiComponent} from "./api.component";
import {ApiChild1Component} from "./children/api-child1.component";

const routes: Routes = [
  { path: 'api',  component: ApiComponent },
  { path: 'api/:id', component: ApiChild1Component }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ApiRoutingModule { }


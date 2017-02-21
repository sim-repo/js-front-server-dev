import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {AdminChild1Component} from "./children/admin-child1.component";

const routes: Routes = [
  { path: 'admin',  component: AdminComponent },
  { path: 'admin/:id', component: AdminChild1Component }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }

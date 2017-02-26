import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {AdminChild1Component} from "./children/admin-child1.component";
import {AdminChild2Component} from "./children/admin-child2.component";
import {AdminChild3Component} from "./children/admin-child3.component";
import {AdminChild4Component} from "./children/admin-child4.component";
import {AdminJvmComponent} from "./children/admin-jvm.component";

const routes: Routes = [
  { path: 'admin',  component: AdminComponent },
  { path: 'admin/one/:id', component: AdminChild1Component },
  { path: 'admin/two/:id', component: AdminChild2Component },
  { path: 'admin/three/:id', component: AdminChild3Component },
  { path: 'admin/four/:id', component: AdminChild4Component },
  { path: 'admin/five/:id', component: AdminJvmComponent}
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

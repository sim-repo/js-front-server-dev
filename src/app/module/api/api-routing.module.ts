import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ApiComponent} from "./api.component";
import {ApiEditorComponent} from "./children/editor/api-editor.component";
import {ApiItemComponent} from "./children/items/api-item.components";

const routes: Routes = [
  { path: 'api',  component: ApiComponent },
  { path: 'api/item/:id', component: ApiItemComponent },
  { path: 'api/add/:id', component: ApiEditorComponent },
  { path: 'api/edit/:id', component: ApiEditorComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ApiRoutingModule { }


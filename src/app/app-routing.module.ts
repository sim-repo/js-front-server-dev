import { NgModule }              from '@angular/core';
import {RouterModule, Routes, PreloadAllModules}  from '@angular/router';
import {PageNotFoundComponent} from "./common/page-not-found.component";

const appRoutes: Routes = [
  { path: 'admin', redirectTo: '/admin', pathMatch: 'full'},
 // { path: 'business', loadChildren: './module/business/business.module#BusinessModule'},
  { path: 'business', redirectTo: '/business', pathMatch: 'full'},
  { path: 'api',redirectTo: '/api', pathMatch: 'full'},
  { path: '', redirectTo: '/news', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule{}

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NewsComponent} from "./news.component";
import {NewsChild1Component} from "./children/news-child1.component";
import {NewsChild2Component} from "./children/news-child2.component";



const routes: Routes = [
  { path: 'news',  component: NewsComponent },
  { path: 'news/one/:id', component: NewsChild1Component },
  { path: 'news/two/:id', component: NewsChild2Component }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class NewsRoutingModule { }


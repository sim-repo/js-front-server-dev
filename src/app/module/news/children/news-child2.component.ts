import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {NewsService} from "../news.service";
import {News} from "../../../model/news";

@Component({
  selector: 'my-business-child2',
  templateUrl: `./news-child1.html`
})

export class NewsChild2Component implements OnInit{
  news: News;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: NewsService){}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getNewsById(+params['id']))
      .subscribe((news: News) => {this.news = news;});
  }

  back() {
    let nId = this.news ? this.news.id : null;
    this.router.navigate(['/news', { id: nId, foo: 'foo' }]);
  }
}




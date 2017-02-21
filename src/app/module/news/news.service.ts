import {Injectable, Input} from '@angular/core';
import {News} from "../../model/news";

let newsPromise = Promise.resolve(this.news);

@Injectable()
export class NewsService {
  @Input() news: News[]=[];


  getNews() { return newsPromise; }

  getNewsById(id: number | string) {
    let newsPromise2 = Promise.resolve(this.news?this.news:News['']);
    return newsPromise2
      .then(news => news.find(n => n.id === id));
  }
}

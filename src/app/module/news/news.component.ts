import {Component} from "@angular/core";
import {News} from "../../model/news";
import {NewsService} from "./news.service";
import {InMemoryService} from "../../memory/in-memory";
import {MyEvent} from "../../model/my-event";
import {AComponent} from "../../common/acomponent";
import {AnyEvent} from "../../event/any.event";
import {Mediator} from "../../event/mediator";

@Component({
  selector:'my-news',
  templateUrl:'./news.html',
  styleUrls: ['news.scss'],
})

export class NewsComponent extends AComponent{
  news: News[];

  constructor(
    public anyevent: AnyEvent,
    public inmemory: InMemoryService,
    public mediator: Mediator,
    private service: NewsService){

    super(anyevent, inmemory, mediator, NewsComponent.name);
    this.setOwnModel(service.news);
  }

  ngOnInit(){
    super.register();
  }

  protected assign(_event: MyEvent) {
    if (_event.model_class === 'News') {
      this.setOwnModel(_event.data);
    }
  }

  protected getOwnModel(): any {
    return this.news;
  }

  protected setOwnModel(_data: any) {
    this.news = _data;
    this.buffer = _data;
  }

  protected doEmit() {
  }

  protected doRoute() {
  }

  protected doShow() {
  }

  protected doHide() {
  }

  runclick(){
    alert('ok');
  }
}

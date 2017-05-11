import {Component} from "@angular/core";

import {InMemoryService} from "../../memory/in-memory";
import {MyEvent} from "../../model/my-event";
import {AComponent} from "../../common/acomponent";
import {AnyEvent} from "../../event/any.event";
import {Mediator} from "../../event/mediator";
import {Api} from "../../model/api-model/Api";
import {ApiService} from "./api.service";

@Component({
  selector:'my-api',
  templateUrl:'./api.html',
  styleUrls: ['../../common/style/common.scss'],
})

export class ApiComponent extends AComponent{
  api: Api[];

  constructor(
    public anyevent: AnyEvent,
    public inmemory: InMemoryService,
    public mediator: Mediator,
    private service: ApiService){

    super(anyevent, inmemory, mediator, ApiComponent.name);
    this.setOwnModel(service.api);
  }

  ngOnInit(){
    super.register();
  }

  protected assign(_event: MyEvent) {
    if (_event.model_class === 'Api') {
      this.setOwnModel(_event.data);
    }
  }

  protected getOwnModel(): any {
    return this.api;
  }

  protected setOwnModel(_data: any) {
    this.api = _data;
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

  checkonclick(){

  }

}

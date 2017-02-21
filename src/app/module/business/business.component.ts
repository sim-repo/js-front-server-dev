import {Component} from "@angular/core";
import {UserReports} from "../../model/user-reports";
import {InMemoryService} from "../../memory/in-memory";
import {BusinessService} from "./business.service";
import {MyEvent} from "../../model/my-event";
import {AComponent} from "../../common/acomponent";
import {AnyEvent} from "../../event/any.event";
import {Mediator} from "../../event/mediator";

@Component({
  selector: 'my-business',
  templateUrl: './business.html',
  styleUrls: ['business.scss'],
})

export class BusinessComponent extends AComponent{
  reports: UserReports[];

  constructor(
    public anyevent: AnyEvent,
    public inmemory: InMemoryService,
    public mediator: Mediator,
    private service: BusinessService
  ){

    super(anyevent, inmemory, mediator, BusinessComponent.name);
    this.setOwnModel(service.reports);
  }

  ngOnInit(){
    super.register();
  }

  protected assign(_event: MyEvent) {
    if (_event.model_class === 'UserReports') {
      this.setOwnModel(_event.data);
    }
  }

  protected getOwnModel(): any {
    return this.reports;
  }

  protected setOwnModel(_data: any) {
    this.reports = _data;
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

}

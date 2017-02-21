import {Component} from "@angular/core";
import {AComponent} from "../../common/acomponent";
import {AnyEvent} from "../../event/any.event";
import {InMemoryService} from "../../memory/in-memory";
import {Mediator} from "../../event/mediator";
import {AdminService} from "./admin.service";
import {MyEvent} from "../../model/my-event";
import {Admin} from "../../model/admin";


@Component({
  selector: 'my-admin',
  templateUrl:'./admin.html',
  styleUrls: ['admin.scss'],
})

export class AdminComponent  extends AComponent {
  admins: Admin[];

  constructor(
    public anyevent: AnyEvent,
    public inmemory: InMemoryService,
    public mediator: Mediator,
    private service: AdminService){

    super(anyevent, inmemory, mediator, AdminComponent.name);
    this.setOwnModel(service.admins);
  }

  ngOnInit(){
    super.register();
  }

  protected assign(_event: MyEvent) {
    if (_event.model_class === 'Admin') {
      this.setOwnModel(_event.data);
    }
  }

  protected getOwnModel(): any {
    return this.admins;
  }

  protected setOwnModel(_data: any) {
    this.admins = _data;
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

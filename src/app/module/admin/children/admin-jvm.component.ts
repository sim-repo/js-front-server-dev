import {Component, OnInit, Output, EventEmitter } from "@angular/core";
import {ActivatedRoute, Router, Params, Data} from "@angular/router";
import {AdminService} from "../admin.service";
import {Admin} from "../../../model/admin-model/admin";
import {AdminJvmService} from "./admin-jvm-service";
import {Jvm} from "../../../model/admin-model/jvm";
import {AxisY} from "../../../model/admin-model/axis-y";
import {AComponent} from "../../../common/acomponent";
import {InMemoryService} from "../../../memory/in-memory";
import {AnyEvent} from "../../../event/any.event";
import {Mediator} from "../../../event/mediator";
import {MyEvent} from "../../../model/my-event";
import {Axis} from "../../../model/admin-model/axis";


@Component({
  selector:'my-admin-jvm',
  templateUrl: `./admin-jvm.html`
})

export class AdminJvmComponent extends AComponent{
  admins: Admin;
  json: Jvm;
  axisY: Array<AxisY> = [];
  axisX:Array<string> = [];
  axis: Axis = new Axis();

  commited: AxisY = new AxisY('commited');
  used: AxisY = new AxisY('used');
  max: AxisY = new AxisY('max');

  show: boolean = false;

  constructor(
              public anyevent: AnyEvent,
              public inmemory: InMemoryService,
              public mediator: Mediator,
              private route: ActivatedRoute,
              private router: Router,
              private service: AdminService,
              private jvm_service: AdminJvmService
  ){
    super(anyevent, inmemory, mediator, AdminJvmComponent.name);
    this.axisY.push(this.used);
    this.axisY.push(this.commited);
    this.axisY.push(this.max);
    for(var i=0;i<8;i++)
    this.used.data.push(0);

  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getById(+params['id']))
      .subscribe((admins: Admin) => {
        this.admins = admins
      });
    setTimeout(() => {
      this.load();
      setInterval(() => this.load(), 1000);
    }, 1000);
  }

  protected assign(event: MyEvent){}
  protected getOwnModel(): any {
    return null;
  }
  protected setOwnModel(_data: any){}
  protected doEmit(){this.emitByAction(5,0,'axis', this.axis);}
  protected doRoute(){}
  protected doShow(){}
  protected doHide(){}

  load() {
    this.jvm_service.lazyLoading()
      .subscribe(
        data => {
          this.json = data;

          if(this.used.data.length>8){
            let arr: Array<any> = new Array(this.used.data.length-1);
            for(var i=1; i<this.used.data.length;i++){
              arr[i-1] = this.used.data[i];
            }
            this.used.data = arr;
          }


          this.used.data.push(this.json.value.used / (1024 * 1024));
          this.max.data.push(this.json.value.max / (1024 * 1024));
          this.commited.data.push(this.json.value.committed / (1024 * 1024));


          let date = new Date(this.json.timestamp * 1000);
          let min = "0" + date.getMinutes();
          let sec = "0" + date.getSeconds();
          let formattedTime = min.substr(-2) + ':' + sec.substr(-2);
          this.axisX.push(formattedTime);
          this.axis.axisY = this.axisY;
          this.axis.axisX = this.axisX;
          this.doEmit();
        }
      );
  }
}

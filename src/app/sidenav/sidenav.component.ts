import {Component} from "@angular/core";
import {AComponent} from "../common/acomponent";
import {MyFilterGroup} from "../model/my-filter-group";
import {AnyEvent} from "../event/any.event";
import {InMemoryService} from "../memory/in-memory";
import {Mediator} from "../event/mediator";
import {MyEvent} from "../model/my-event";
import {MyFilterItem} from "../model/my-filter-item";


@Component({
  selector: 'my-sidenav',
  templateUrl: './sidenav.html',
  styleUrls:['../app.component.css']
})

export class SidenavComponent extends AComponent{
  selectedFgroup: MyFilterGroup[];

  constructor(
    public anyevent: AnyEvent,
    public inmemory: InMemoryService,
    public mediator: Mediator
  ){super(anyevent, inmemory, mediator, SidenavComponent.name);}

  ngOnInit(){
    super.register();
  }

  protected assign(_event: MyEvent){
    this.selectedFgroup = this.inmemory.getFiltersByModel(_event.model_class);
    for(var i=0,len=this.selectedFgroup.length;i<len;i++){
      for(var j=0,len2=this.selectedFgroup[i].items.length;j<len2;j++){
        this.selectedFgroup[i].items[j].enabled=false;
      }
    }
  }

  protected saveAndEmit(fitem: MyFilterItem, checked: boolean){
    fitem.enabled = checked;
    fitem.x_value = fitem.value;
    fitem.reverse = !checked;
    this.emitByAction(1,5,'MyFilterItem', fitem);
  }

  protected doEmit(){alert('sidenav: doEmit');}
  protected doRoute(){alert('sidenav: doRoute');}
  protected doShow(){alert('sidenav: doShow');}
  protected doHide(){alert('sidenav: doHide');}
  protected doFilter(_event: MyEvent){
    let fitems: Set<MyFilterItem> = this.inmemory.getFiltersByRelations(_event.model_class, _event.data);
    fitems.forEach(item=>{item.enabled=true; item.reset=true; this.emitByAction(1,5,'MyFilterItem', item)})
  }

  protected getOwnModel(): any {
    return null;
  }

  protected setOwnModel(_data: any) {
  }
}

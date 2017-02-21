import {Component, Input} from "@angular/core";
import {AComponent} from "../common/acomponent";
import {Tab} from "../model/tab";
import {MyFilterGroup} from "../model/my-filter-group";
import {AnyEvent} from "../event/any.event";
import {InMemoryService} from "../memory/in-memory";
import {Mediator} from "../event/mediator";
import {MyEvent} from "../model/my-event";


@Component({
  selector: 'my-tab',
  templateUrl: './tab.component.html',
  styleUrls:['./tab.scss']
})

export class TabComponent extends AComponent{
  tabs: Tab[];
  selectedFilters: MyFilterGroup[];

  constructor(
    public anyevent: AnyEvent,
    public inmemory: InMemoryService,
    public mediator: Mediator){super(anyevent, inmemory, mediator, TabComponent.name);}

  ngOnInit(){
    super.register();
  }

  protected assign(_event: MyEvent){
    this.selectedFilters = this.inmemory.getFiltersByModel(_event.model_class);
    //?>>
    if (_event.model_class === 'Tab') {
      this.setOwnModel(_event.data);
    }
  }

  protected doEmit(){alert('tab: doEmit');}
  protected doRoute(){alert('tab: doRoute');}
  protected doShow(){alert('tab: doShow');}
  protected doHide(){alert('tab: doHide');}
  protected doFilter(_data: any){alert('tab: doFilter');}

  protected getOwnModel(): any {
    return null;
  }

  protected setOwnModel(_data: any) {
    this.tabs = _data;
  }
}


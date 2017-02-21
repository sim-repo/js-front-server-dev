import {Injectable} from "@angular/core";
import {AnyEvent} from "./any.event";
import {InMemoryService} from "../memory/in-memory";
import {MyEvent} from "../model/my-event";



@Injectable()
export class Mediator{

  constructor(private anyevent: AnyEvent,
              private inmemory: InMemoryService){}

  public emitByAgroup(_agroupId: number, _modelClass: string, _data: any){
    let events = this.inmemory.getEventsByAgroupId(_agroupId);
    for(var i=0, len = events.length; i < len; i++){
      let event = new MyEvent();
      event.agroup_id = events[i].action_group_id;
      event.action_id = events[i].action_id;
      event.event_id = events[i].event_id;
      event.model_class = _modelClass;
      event.data = _data;
      this.anyevent.fire(event);
    }
  }

  public emitByAction(_agroupId: number, _actionId: number, _modelClass: string, _data: any){
    let events = this.inmemory.getEventsByActionId(_agroupId,_actionId);

    for(var i=0, len = events.length; i < len; i++){
      if(events[i].action_group_id===null || events[i].action_id===null || events[i].event_id===null)
        continue;

      let event = new MyEvent();
      event.agroup_id = events[i].action_group_id;
      event.action_id = events[i].action_id;
      event.event_id = events[i].event_id;
      event.model_class = _modelClass;
      event.data = _data;

      this.anyevent.fire(event);
    }
  }

}

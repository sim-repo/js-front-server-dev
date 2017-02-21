import {EventRegistry} from "../model/event-registry";
import {Injectable} from "@angular/core";

import {ActionGroup} from "../model/action-group";
import {Action} from "../model/action";
import {MyEvent} from "../model/my-event";
import {MyFilterGroup} from "../model/my-filter-group";

import {MyFilterRelations} from "../model/my-filter-relations";
import {MyFilterItem} from "../model/my-filter-item";
import {Tab} from "../model/tab";

@Injectable()
export class InMemoryService{
  tab: Tab[];
  agroups: ActionGroup[];
  actions: Action[];
  events: EventRegistry[];
  fgroups: MyFilterGroup[];
  fitems: Map<any,MyFilterItem> = new Map<number,MyFilterItem>();
  frelations: MyFilterRelations[];


  public isSubscribed(_event: MyEvent, _componentId: string): boolean{
    let arr = this.events.filter(event=>{if(event.event_id==_event.event_id && event.component_id==_componentId) return true});
    return arr.length>0;
  }

  public getEventsByAgroupId(_agroupId: number): EventRegistry[]{
    return this.events.filter(event=>{if(event.action_group_id==_agroupId) return true});
  }

  public getEventsByActionId(_agroupId: number, _actionId: number): EventRegistry[]{
    return this.events.filter(event=>{if(event.action_group_id==_agroupId && event.action_id==_actionId) return true}).map(val => {return val});
  }

  public getFiltersByModel(_modelId: string): MyFilterGroup[] {
    return this.fgroups.filter(f => {if (f.model_class == _modelId) return true});
  }

  public getFiltersByRelations(_modelId: string, _model: any): Set<MyFilterItem>{
    let relations: MyFilterRelations[] = this.frelations.filter(rel=>{if(rel.initiator_model_class == _modelId && rel.model_class_id == _model.id) return true});
    let res :Set<MyFilterItem> = new Set<MyFilterItem>();
    for(var i=0, len=relations.length; i<len;i++){
        if(this.fitems.has(relations[i].filter_item_id)){
          res.add(this.fitems.get(relations[i].filter_item_id));
        }
    }
    return res;
  }
}

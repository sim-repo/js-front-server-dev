import {MyEvent} from "../model/my-event";
import {InMemoryService} from "../memory/in-memory";
import {Input} from "@angular/core";
import {MyFilterItem} from "../model/my-filter-item";
import {isNull} from "util";
import {AnyEvent} from "../event/any.event";
import {Mediator} from "../event/mediator";


export abstract class AComponent{
  @Input() buffer: any[];
  public count: Map<String, number> = new Map<String, number>();


  constructor( public anyevent: AnyEvent,
               public inmemory: InMemoryService,
               public mediator: Mediator,
               public childClassName: string
              ){}

  protected register(){
    this.anyevent.on()
      .subscribe(
        event=> {
          if(this.inmemory.isSubscribed(event, this.childClassName)) {
            this.onSubscribe(event);
          }})
  }

  protected onSubscribe(event: MyEvent){
    this.assign(event);
    this.doTask(event);
  }

  protected abstract assign(event: MyEvent);

  protected doTask(event: MyEvent){
      switch (event.action_id){
        case 1: this.doEmit(); break;
        case 2: this.doRoute(); break;
        case 3: this.doShow(); break;
        case 4: this.doHide(); break;
        case 5: this.doFilter(event); break;
        default: break;
      }
  }
  protected abstract getOwnModel(): any;
  protected abstract setOwnModel(_data: any);
  protected abstract doEmit();
  protected abstract doRoute();
  protected abstract doShow();
  protected abstract doHide();



  private isTarget(_value: any,_filter: MyFilterItem):boolean{
    let val = (isNull(_value) ? null : _value.toLowerCase());
    switch(_filter.type){
      case 'checkbox': return val == _filter.value.toLowerCase();
      case 'range checkbox': return val >= _filter.min_value && val <= _filter.max_value;
      case 'minimum slider': if(!_filter.reverse){ return val >= _filter.value} else {return val <= _filter.value}
      case 'maximum slider': if(!_filter.reverse){ return val <= _filter.value} else {return val >= _filter.value}
      default: break;
    }
    return;
  }

  private keepShown(_model_key: string):boolean{
    if(this.count.has(_model_key)) {
      let num = this.count.get(_model_key);
      if (num - 1 == 0) {
        this.count.delete(_model_key);
        return false;
      }
      else {
        this.count.set(_model_key,num-1);
        return true;
      }
    }
    return true;
  }


  protected doFilter(_event: MyEvent){
    let buf: any[];
    let filter = <MyFilterItem>_event.data;
    let s: Set<String> = new Set<String>();

    if((this.getOwnModel().length == this.buffer.length && this.count.size==0) || filter.reset) {
      this.count.clear();
      this.buffer = this.buffer.filter(dim => {
        if (dim.id == '-1') return true;
      })
    }

    if(filter.enabled) {
      switch (filter.model_field) {
        case 'id':buf = this.getOwnModel().filter(dim => {if(this.isTarget(dim.id,filter)) return true;});break;
        case 'searching_tag1': buf = this.getOwnModel().filter(dim => {if(this.isTarget(dim.searching_tag1,filter)) return true;});break;
        case 'searching_tag2':buf = this.getOwnModel().filter(dim =>  {if(this.isTarget(dim.searching_tag2,filter)) return true;});break;
        case 'searching_tag3': buf = this.getOwnModel().filter(dim => {if(this.isTarget(dim.searching_tag3,filter)) return true;});break;
        case 'searching_tag4': buf = this.getOwnModel().filter(dim => {if(this.isTarget(dim.searching_tag4,filter)) return true;});break;
        case 'searching_tag5': buf = this.getOwnModel().filter(dim => {if(this.isTarget(dim.searching_tag5,filter)) return true;});break;
        case 'searching_tag6': buf = this.getOwnModel().filter(dim => {if(this.isTarget(dim.searching_tag6,filter)) return true;});break;
        case 'searching_tag7': buf = this.getOwnModel().filter(dim => {if(this.isTarget(dim.searching_tag7,filter)) return true;});break;
        case 'searching_tag8': buf = this.getOwnModel().filter(dim => {if(this.isTarget(dim.searching_tag8,filter)) return true;});break;
        case 'searching_tag9': buf = this.getOwnModel().filter(dim => {if(this.isTarget(dim.searching_tag9,filter)) return true;});break;
        case 'searching_tag10': buf = this.getOwnModel().filter(dim =>{if(this.isTarget(dim.searching_tag10,filter))return true;});break;
        case 'searching_tag11': buf = this.getOwnModel().filter(dim =>{if(this.isTarget(dim.searching_tag11,filter))return true;});break;
        case 'searching_tag12': buf = this.getOwnModel().filter(dim =>{if(this.isTarget(dim.searching_tag12,filter))return true;});break;
        case 'searching_tag13': buf = this.getOwnModel().filter(dim =>{if(this.isTarget(dim.searching_tag13,filter))return true;});break;
        case 'searching_tag14': buf = this.getOwnModel().filter(dim =>{if(this.isTarget(dim.searching_tag14,filter))return true;});break;
        case 'searching_tag15': buf = this.getOwnModel().filter(dim =>{if(this.isTarget(dim.searching_tag15,filter))return true;});break;
        case 'searching_tag16': buf = this.getOwnModel().filter(dim =>{if(this.isTarget(dim.searching_tag16,filter))return true;});break;
        case 'searching_tag17': buf = this.getOwnModel().filter(dim =>{if(this.isTarget(dim.searching_tag17,filter))return true;});break;
        case 'searching_tag18': buf = this.getOwnModel().filter(dim =>{if(this.isTarget(dim.searching_tag18,filter))return true;});break;
        case 'searching_tag19': buf = this.getOwnModel().filter(dim =>{if(this.isTarget(dim.searching_tag19,filter))return true;});break;
        case 'searching_tag20': buf = this.getOwnModel().filter(dim =>{if(this.isTarget(dim.searching_tag20,filter))return true;});break;
        default:break;
      }
      buf.forEach(dim=>{
          if(this.count.has(dim.id)){
            let num = this.count.get(dim.id);
            this.count.set(dim.id, num+1);
          }else{
            this.count.set(dim.id,1);
          }
      });
      this.buffer.forEach(dim=>{s.add(dim.id)});
      buf.forEach(dim => {if(!s.has(dim.id)){this.buffer.push(dim)}});

    }else{
      switch (filter.model_field) {
        case 'id': this.buffer = this.buffer.filter(dim => {if(this.isTarget(dim.id,filter)){ return this.keepShown(dim.id)} else return true;}); break;
        case 'searching_tag1': this.buffer = this.buffer.filter(dim => {if(this.isTarget(dim.searching_tag1,filter)){ return this.keepShown(dim.id)} else return true;}); break;
        case 'searching_tag2': this.buffer = this.buffer.filter(dim => {if(this.isTarget(dim.searching_tag2,filter)){ return  this.keepShown(dim.id)} else return true;}); break;
        case 'searching_tag3':this.buffer = this.buffer.filter(dim => {if(this.isTarget(dim.searching_tag3,filter)){ return  this.keepShown(dim.id)} else return true;});break;
        case 'searching_tag4':this.buffer = this.buffer.filter(dim => {if(this.isTarget(dim.searching_tag4,filter)){ return  this.keepShown(dim.id)} else return true;});break;
        case 'searching_tag5':this.buffer = this.buffer.filter(dim => {if(this.isTarget(dim.searching_tag5,filter)){ return  this.keepShown(dim.id)} else return true;});break;
        case 'searching_tag6':this.buffer = this.buffer.filter(dim => {if(this.isTarget(dim.searching_tag6,filter)){ return  this.keepShown(dim.id)} else return true;});break;
        case 'searching_tag7':this.buffer = this.buffer.filter(dim => {if(this.isTarget(dim.searching_tag7,filter)){ return  this.keepShown(dim.id)} else return true;});break;
        case 'searching_tag8':this.buffer = this.buffer.filter(dim => {if(this.isTarget(dim.searching_tag8,filter)){ return  this.keepShown(dim.id)} else return true;});break;
        case 'searching_tag9':this.buffer = this.buffer.filter(dim => {if(this.isTarget(dim.searching_tag9,filter)){ return  this.keepShown(dim.id)} else return true;});break;
        case 'searching_tag10':this.buffer = this.buffer.filter(dim => {if(this.isTarget(dim.searching_tag10,filter)){ return  this.keepShown(dim.id)} else return true;});break;
        case 'searching_tag11':this.buffer = this.buffer.filter(dim => {if(this.isTarget(dim.searching_tag11,filter)){ return  this.keepShown(dim.id)} else return true;});break;
        case 'searching_tag12':this.buffer = this.buffer.filter(dim => {if(this.isTarget(dim.searching_tag12,filter)){ return  this.keepShown(dim.id)} else return true;});break;
        case 'searching_tag13':this.buffer = this.buffer.filter(dim => {if(this.isTarget(dim.searching_tag13,filter)){ return  this.keepShown(dim.id)} else return true;});break;
        case 'searching_tag14':this.buffer = this.buffer.filter(dim => {if(this.isTarget(dim.searching_tag14,filter)){ return  this.keepShown(dim.id)} else return true;});break;
        case 'searching_tag15':this.buffer = this.buffer.filter(dim => {if(this.isTarget(dim.searching_tag15,filter)){ return  this.keepShown(dim.id)} else return true;});break;
        case 'searching_tag16':this.buffer = this.buffer.filter(dim => {if(this.isTarget(dim.searching_tag16,filter)){ return  this.keepShown(dim.id)} else return true;});break;
        case 'searching_tag17':this.buffer = this.buffer.filter(dim => {if(this.isTarget(dim.searching_tag17,filter)){ return  this.keepShown(dim.id)} else return true;});break;
        case 'searching_tag18':this.buffer = this.buffer.filter(dim => {if(this.isTarget(dim.searching_tag18,filter)){ return  this.keepShown(dim.id)} else return true;});break;
        case 'searching_tag19':this.buffer = this.buffer.filter(dim => {if(this.isTarget(dim.searching_tag19,filter)){ return  this.keepShown(dim.id)} else return true;});break;
        case 'searching_tag20':this.buffer = this.buffer.filter(dim => {if(this.isTarget(dim.searching_tag20,filter)){ return  this.keepShown(dim.id)} else return true;});break;
        default:break;
      }
      if(this.buffer.length==0){
        this.buffer = this.getOwnModel();
      }
    }
  }

  protected emitByAgroup(_agroupId: number, _modelClass: string, _data: any) {
    this.mediator.emitByAgroup(_agroupId, _modelClass, _data);
  }

  protected emitByAction(_agroupId: number, _actionId: number, _modelClass: string, _data: any) {
    this.mediator.emitByAction(_agroupId, _actionId, _modelClass, _data);
  }
}

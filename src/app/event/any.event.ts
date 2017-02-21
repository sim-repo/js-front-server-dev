import {Observable} from "rxjs";
import {Broadcaster} from "./broadcaster";
import {Injectable} from "@angular/core";
import {MyEvent} from "../model/my-event";


@Injectable()
export class AnyEvent{

  constructor(private broadcaster: Broadcaster){}

  fire(data: MyEvent){
    this.broadcaster.broadcast(AnyEvent, data);
  }

  on():Observable<MyEvent>{
    return this.broadcaster.on<MyEvent>(AnyEvent);
  }

}

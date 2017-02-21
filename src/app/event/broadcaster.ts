import {Subject, Observable} from "rxjs";

interface BroadcastEvent{
  key: any;
  data?: any;
}

export class Broadcaster{
  subject: Subject<BroadcastEvent>;


  constructor(){
    this.subject = new Subject<BroadcastEvent>();
  }

  broadcast(key: any, data?: any){
    this.subject.next({key, data});
  }

  on<T>(key: any):Observable<T>{
    return this.subject.asObservable()
      .filter(event=>event.key===key)
      .map(event=><T>event.data);
  }
}

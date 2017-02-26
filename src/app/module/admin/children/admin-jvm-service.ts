import {Injectable, OnInit} from "@angular/core";
import {HttpService} from "../../../http/http.service";
import {JOLOKIA, JOLOKIA_URLs} from "../../../http/link.const";
import {Observable} from "rxjs";


@Injectable()
export class AdminJvmService implements OnInit{

  constructor(private loader: HttpService){}

  ngOnInit(): void {
    this.lazyLoading();
  }

  lazyLoading():Observable<any>{
    return this.loader.getSingle(JOLOKIA[JOLOKIA_URLs.HEAP_MEMORY_USAGE].url);
  }


}

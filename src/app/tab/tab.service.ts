import {Injectable, Input} from '@angular/core';
import {Tab} from "../model/tab";


let tabPromise = Promise.resolve(this.news);

@Injectable()
export class TabService {
  @Input() tab: Tab[]=[];
  getTab() { return tabPromise; }
}

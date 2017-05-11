import {Injectable, Input} from '@angular/core';
import {Api} from "../../model/api-model/Api";

let newsPromise = Promise.resolve(this.news);

@Injectable()
export class ApiService {
  @Input() api: Api[]=[];


  getApi() { return newsPromise; }

  getApiById(id: number | string) {
    let apiPromise2 = Promise.resolve(this.api?this.api:Api['']);
    return apiPromise2
      .then(api => api.find(n => n.id === id));
  }
}


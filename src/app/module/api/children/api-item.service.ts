import {Injectable, Input} from '@angular/core';
import {ApiItem} from "../../../model/api-model/ApiItem";


let promise = Promise.resolve(this.dataset);

@Injectable()
export class ApiItemService {

  @Input() dataset: ApiItem[] = [];

  getDataset() {
    return promise;
  }

  getById(id: string) {
    let Promise2 = Promise.resolve(this.dataset?this.dataset:ApiItem['']);
    return Promise2
      .then(dataset => dataset.filter(n => n.id === id));
  }

  getByEndpointId(_endpointId: string): Promise<ApiItem[]>{
    let Promise2 = Promise.resolve(this.dataset?this.dataset:ApiItem['']);
    return Promise2
      .then(dataset => dataset.filter(n =>
                  n.searching_tag2 === _endpointId ||
                  n.searching_tag3 === _endpointId ||
                  n.searching_tag4 === _endpointId ||
                  n.searching_tag5 === _endpointId ||
                  n.searching_tag6 === _endpointId ||
                  n.searching_tag7 === _endpointId ||
                  n.searching_tag8 === _endpointId ));
  }

  public delete(_rec: ApiItem) {
    let index: number = this.dataset.indexOf(_rec);
    if (index !== -1) {
      this.dataset.splice(index, 1);
    }
  }
}




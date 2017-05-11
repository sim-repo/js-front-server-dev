import {Injectable, Input} from '@angular/core';
import {ApiEditor} from "../../../../model/api-model/ApiEditor";


let promise = Promise.resolve(this.dataset);

@Injectable()
export class ApiEditorService {
  @Input() dataset: ApiEditor[] = [];

  getDataset() { return promise; }

  getById(id: string) {
    let Promise2 = Promise.resolve(this.dataset?this.dataset:ApiEditor['']);
    return Promise2
      .then(dataset => dataset.find(n => n.id === id));
  }
}



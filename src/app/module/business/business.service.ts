import {Injectable, Input} from '@angular/core';
import {UserReports} from "../../model/user-reports";

let newsPromise = Promise.resolve(this.reports);

@Injectable()
export class BusinessService {
  @Input() reports: UserReports[]=[];

  getNews() { return newsPromise; }

  getById(id: number) {
    let newsPromise2 = Promise.resolve(this.reports?this.reports:UserReports['']);
    return newsPromise2
      .then(reports => reports.find(r =>r.id === id));
  }
}

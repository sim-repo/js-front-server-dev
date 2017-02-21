import {Injectable, Input} from '@angular/core';
import {Admin} from "../../model/admin";


let adminPromise = Promise.resolve(this.reports);

@Injectable()
export class AdminService {
  @Input() admins: Admin[]=[];

  getAdmin() { return adminPromise; }

  getById(id: number) {
    let newsPromise2 = Promise.resolve(this.admins?this.admins:Admin['']);
    return newsPromise2
      .then(admins => admins.find(r =>r.id === id));
  }
}


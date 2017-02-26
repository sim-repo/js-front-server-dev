import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {AdminService} from "../admin.service";
import {Admin} from "../../../model/admin-model/admin";

@Component({
  selector:'my-admin-child3',
  templateUrl: `./admin-child3.html`
})

export class AdminChild3Component implements OnInit{
  admins: Admin;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: AdminService){}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getById(+params['id']))
      .subscribe((admins: Admin) => {this.admins = admins});
  }

  back() {
    let nId = this.admins ? this.admins.id : null;
    this.router.navigate(['/admin', { id: nId, foo: 'foo' }]);
  }
}
/**
 * Created by User on 23.02.2017.
 */

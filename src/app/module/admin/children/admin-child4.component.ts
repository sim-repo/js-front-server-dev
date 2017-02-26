import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {AdminService} from "../admin.service";
import {Admin} from "../../../model/admin-model/admin";

@Component({
  selector:'my-admin-child4',
  templateUrl: `./admin-child4.html`
})

export class AdminChild4Component implements OnInit{
  admins: Admin;
  private chartData: Array<any>;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: AdminService){}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getById(+params['id']))
      .subscribe((admins: Admin) => {this.admins = admins});

    setTimeout(() => {
      this.generateData();

      // change the data periodically
      setInterval(() => this.generateData(), 3000);
    }, 1000);
  }

  back() {
    let nId = this.admins ? this.admins.id : null;
    this.router.navigate(['/admin', { id: nId, foo: 'foo' }]);
  }

  generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
  }
}

import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {UserReports} from "../../../model/user-reports";
import {Params, Router, ActivatedRoute} from "@angular/router";
import {BusinessService} from "../business.service";
import {UserReportRequest} from "../../../model/user-report-request";
import {HttpService} from "../../../http/http.service";
import {BACKEND_URL_LIST, URLs} from "../../../http/link.const";
import {GridFilter, Line} from "../../../common/grid-filter/grid-filter-classes";

@Component({
  selector:'my-reports',
  templateUrl:'./user-reports.html',
  styleUrls:['./form.scss']
})

export class UserReportsComponent implements OnInit{
  report: UserReports;
  bufout: Array<Line>;
  original: Array<Line>;
  gridFilter:GridFilter;
  sortCol: number = undefined;
  sortAsc: boolean = true;


  public totalItems: number = 0;
  public currentPage: number = 1;
  public itemPerPage: number = 15;

  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  public pageChanged(event: any): void {
  }

  public form: FormGroup;
  public form2: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private loader: HttpService,
              private service: BusinessService){}

  ngOnInit(){
    this.route.params
      .switchMap((params: Params) => this.service.getById(+params['id']))
      .subscribe((report: UserReports) => {
        this.report = report;
        if(report != undefined)
          this.form = this.createForm(this.report);
    });
  }

  back(){
    let nId = this.report ? this.report.id : null;
    this.router.navigate(['/business', { id: nId, foo: 'foo' }]);
  }

  send(){
    let r = new UserReportRequest();
    r.sqlTemplate = this.report.sql_template;
    r.tag = this.report.id+'';
    r.items = [];

    for(var i=0,len=this.report.params.length; i<len;i++){
      let obj = Object.create(null);
      obj['param'] =this.report.params[i].param_name
      obj['val'] = this.report.params[i].value;
      r.items.push(obj);
    }
    this.loader.postJson(BACKEND_URL_LIST[URLs.USER_POST_REPORT].url, r)
      .subscribe(data=>this.fill(data))
  }

  createForm(_report: UserReports){
    let group: any = {};

    group[_report.sql_template] =  new FormControl(_report.sql_template || '');
    _report.params
      .forEach(p=>{
        group[p.param_name] = p.required==1 ? new FormControl(p.sample, Validators.required)
          : new FormControl(p.sample);
      });
    return new FormGroup(group);
  }


  sort(_column: any){
    var promise = new Promise((resolve, reject) => {
      resolve(this.gridFilter.getColumnNo(_column));
    });

    promise.then(column => {
      this.sortCol = <number>column;
    });
    this.sortCol = this.gridFilter.getColumnNo(_column);
    this.sortAsc = !this.sortAsc;
    //this.bufout = this.bufout.map(e=>e);
    //TODO optimization
    this.bufout = this.gridFilter.getNewLines(this.bufout);
  }

  isSorted(_column: any):boolean{
    if (this.sortCol === this.gridFilter.getColumnNo(_column))
      return this.sortAsc;
    return false;
  }

  edit(_filter: string){
    //TODO
  }

  doFilter(){
    let filtered: Array<Line> = this.gridFilter.doFilter();
    switch(filtered){
      case null: this.bufout = this.original; break;
      default: this.bufout = filtered;
    }
    this.totalItems = this.bufout.length;
  }

  getTotalItems(){
    return this.totalItems;
  }

  fill(_json: any){
    if(_json === undefined)
      return;

    if(this.gridFilter !=undefined){
      this.gridFilter.destroy();
      this.gridFilter=null;
    }
    this.gridFilter = new GridFilter();

    this.form2 = this.gridFilter.createForm(_json);

    this.bufout = this.gridFilter.getLines();
    this.original = this.gridFilter.getLines();
    this.totalItems = this.gridFilter.getLines().length;
  }
}

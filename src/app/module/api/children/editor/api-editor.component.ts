import {animate, Component, EventEmitter, Input, Output, state, style, transition, trigger} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {BACKEND_URL_LIST, URLs} from "../../../../http/link.const";
import {ApiItemService} from "../api-item.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ApiItem} from "../../../../model/api-model/ApiItem";
import {HttpService} from "../../../../http/http.service";
import { UUID } from 'angular2-uuid';
import {Api} from "../../../../model/api-model/Api";

@Component({
  selector:'my-editor-api',
  templateUrl:'api-editor.html',
  styleUrls: ['./api-editor.scss']
})



export class ApiEditorComponent{

  form: FormGroup;
  id: string;
  sub: any;
  apiItems: ApiItem[] = [];
  data: ApiItem;

  saveResult: string ;
  err: string;
  timer: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ApiItemService,
    private http: HttpService
  ){}

  ngOnInit(): void {
    this.form = this.createForm();

    this.sub = this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.route.params
          .switchMap((params: Params)=>this.service.getById(this.id))
          .subscribe((apiItems: ApiItem[])=> {this.apiItems = apiItems; if(apiItems[0] != undefined)this.data = apiItems[0];});
      }
    )
    this.data = new ApiItem();
    this.data.src_endpoint_id = "NAV";
  }


  createForm() {
    let group: any = {};
    group['data.src_endpoint_id'] = new FormControl('data.src_endpoint_id');
    group['data.title'] = new FormControl('data.title');
    group['data.top_priority'] = new FormControl('data.top_priority');
    group['data.html_dst_input'] = new FormControl('data.html_dst_input');
    group['data.html_src_output'] = new FormControl('data.html_src_output');
    group['data.html_esb_ctrl'] = new FormControl('data.html_esb_ctrl');
    group['data.html_dst_reply'] = new FormControl('data.html_dst_reply');
    group['data.html_any_big'] = new FormControl('data.html_any_big');
    group['data.html_any_medium'] = new FormControl('data.html_any_medium');
    group['data.html_any_small'] = new FormControl('data.html_any_small');
    group['data.html_any_xsmall'] = new FormControl('data.html_any_xsmall');
    group['data.searching_tag1'] = new FormControl('data.searching_tag1');
    group['data.searching_tag2'] = new FormControl('data.searching_tag2');
    group['data.searching_tag3'] = new FormControl('data.searching_tag3');
    group['data.searching_tag4'] = new FormControl('data.searching_tag4');
    group['data.searching_tag5'] = new FormControl('data.searching_tag5');
    group['data.searching_tag6'] = new FormControl('data.searching_tag6');
    group['data.searching_tag7'] = new FormControl('data.searching_tag7');
    group['data.searching_tag8'] = new FormControl('data.searching_tag8');
    group['data.searching_tag9'] = new FormControl('data.searching_tag9');
    group['data.searching_tag10'] = new FormControl('data.searching_tag10');

    return new FormGroup(group);
  }

  add(_data: ApiItem){
    this.err = "";
    if(_data.id==undefined)
      _data.id = UUID.UUID();
    this.http.postJson(BACKEND_URL_LIST[URLs.POST_API].url, _data)
       .subscribe(result=>this.getSuccess(_data),
                  err => this.logError(err));
  }

  back(){
    this.router.navigate(['/api']);
  }

  getSuccess(_data){
    this.service.delete(_data);
    this.service.dataset.push(_data);
    this.saveResult = " сохранено..";
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.saveResult = "";
    }, 10000)
  }

  logError(_err){
    this.err = _err;
  }
}




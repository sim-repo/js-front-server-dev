import {Component, Input} from "@angular/core";
import {ApiItem} from "../../../../model/api-model/ApiItem";
import {ActivatedRoute, Params} from "@angular/router";
import {ApiItemService} from "../api-item.service";
import {DialogsService} from "../../../../common/dialog/confirm-dialog.service";
import {HttpService} from "../../../../http/http.service";
import {BACKEND_URL_LIST, URLs} from "../../../../http/link.const";
import {AComponent} from "../../../../common/acomponent";
import {Mediator} from "../../../../event/mediator";
import {InMemoryService} from "../../../../memory/in-memory";
import {AnyEvent} from "../../../../event/any.event";
import {MyEvent} from "../../../../model/my-event";


@Component({
  selector:'my-api-item',
  templateUrl:'api-item.html',
  styleUrls: ['../../../../common/style/common.scss'],
})

export class ApiItemComponent extends AComponent{

  private apiItems: ApiItem[];
  private endpointId: string;
  private sub: any;
  public result: any;

  constructor(
    public anyevent: AnyEvent,
    public inmemory: InMemoryService,
    public mediator: Mediator,
    private route: ActivatedRoute,
    private service: ApiItemService,
    private dialogsService: DialogsService,
    private http: HttpService
  ){
      super(anyevent, inmemory, mediator, ApiItemComponent.name);
   }

  ngOnInit(){
    super.register();
    this.refresh();
  }


  delete(item){
    this.http.postJson(BACKEND_URL_LIST[URLs.DELETE_API].url, item)
      .subscribe(
        result=>this.getSuccess(item),
        err => this.getError(err)
      );
  }

  openDialog(item) {
    this.dialogsService
      .confirm('Удаление записи', 'Вы уверены, что хотите продолжить?')
      .subscribe(yes => {if(yes){this.delete(item) }});
  }

  getSuccess(item){
    this.service.delete(item);
    this.refresh();
  }

  refresh(){
    this.sub = this.route.params.subscribe(
      params => {
        this.endpointId = params['id'];
        this.route.params
          .switchMap((params: Params)=>this.service.getByEndpointId(this.endpointId))
          .subscribe((apiItems: ApiItem[])=> {this.apiItems = apiItems;this.setOwnModel(this.apiItems)});
      }
    )
  }

  getError(err){

  }


  protected assign(_event: MyEvent) {
    if (_event.model_class === 'ApiItem') {
      this.setOwnModel(_event.data);
    }
  }

  protected getOwnModel(): any {
    return this.apiItems;
  }

  protected setOwnModel(_data: any) {
    this.buffer = _data;
  }

  protected doEmit() {
  }

  protected doRoute() {
  }

  protected doShow() {
  }

  protected doHide() {
  }
}



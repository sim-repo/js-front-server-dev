import {BackendURL} from "../model/backend-url";

export const BACKEND_ROOT_LINK: String = 'http://localhost:8070/front/sync/get/json/log/';
export const BACKEND_ROOT_LINK2: String = 'http://localhost:8070/front/sync/post/json/log/';

//export const BACKEND_ROOT_LINK: String = 'http://msk10websvc2:8018/front/sync/get/json/log/';
//export const BACKEND_ROOT_LINK2: String = 'http://msk10websvc2:8018/front/sync/post/json/log/';

//export const BACKEND_ROOT_LINK: String = 'http://localhost:8018/SpringRestCrud/sync/get/json/log/';
//export const BACKEND_ROOT_LINK2: String = 'http://localhost:8018/SpringRestCrud/sync/get/json/log/';


export enum URLs {
  NEWS = 0,
  EVENTS = 1,
  FILTER_RELATIONS = 2,
  FILTER_GROUPS = 3,
  ACTIONS_GROUPS = 4,
  ACTIONS = 5,
  USER_REPORTS = 6,
  USER_POST_REPORT = 7,
  TAB = 8,
  ADMIN = 9,
  API = 10,
  API_ITEMS=11,
  POST_API=12,
  DELETE_API=13
}


export const BACKEND_URL_LIST: BackendURL[] = [
  {id: 'news', url: BACKEND_ROOT_LINK+'news'},
  {id: 'events', url: BACKEND_ROOT_LINK+'events'},
  {id: 'frelation', url: BACKEND_ROOT_LINK+'relations'},
  {id: 'fgroups', url: BACKEND_ROOT_LINK+'fgroup'},
  {id: 'agroups', url: BACKEND_ROOT_LINK+'agroup'},
  {id: 'actions', url: BACKEND_ROOT_LINK+'actions'},
  {id: 'reports', url: BACKEND_ROOT_LINK+'reports'},
  {id: 'post_report', url: BACKEND_ROOT_LINK2+'reports'},
  {id: 'tab', url: BACKEND_ROOT_LINK+'tab'},
  {id: 'admin', url: BACKEND_ROOT_LINK+'admin'},
  {id: 'api', url: BACKEND_ROOT_LINK+'api'},
  {id: 'api_items', url: BACKEND_ROOT_LINK+'api/items'},
  {id: 'post_api', url: BACKEND_ROOT_LINK2+'api/item/add'},
  {id: 'post_api', url: BACKEND_ROOT_LINK2+'api/item/del'},
]

export const JOLOKIA_ROOT_LINK: String = 'http://msk10websvc2:8888/jolokia-war-1.3.5/read/';

export enum JOLOKIA_URLs {
  HEAP_MEMORY_USAGE = 0
}

export const JOLOKIA: BackendURL[] = [
  {id: 'heap_memory_usage', url: JOLOKIA_ROOT_LINK+'java.lang:type=Memory/HeapMemoryUsage'}
]

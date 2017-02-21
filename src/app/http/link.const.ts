import {BackendURL} from "../model/backend-url";

export const BACKEND_ROOT_LINK: String = 'http://localhost:8037/front/sync/get/json/log/';
export const BACKEND_ROOT_LINK2: String = 'http://localhost:8037/front/sync/post/json/log/';

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
  ADMIN = 9
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
]


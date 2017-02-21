export class MyEvent{
  agroup_id: number;
  action_id: number;
  event_id: string;
  model_class: string; // need instead of <instanceof> =>  has bug with pass param between html -> function now!
  data: any;
}

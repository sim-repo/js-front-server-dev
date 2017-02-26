import {AxisYItem} from "./axis-y-item";
export class AxisY{
  constructor(_label: string){
    this.label=_label;
  }
  data: Array<number> = [];
  label: string;
}

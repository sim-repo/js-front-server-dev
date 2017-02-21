import {SqlParam} from "./sql-param";

export class SqlTemplate{
  tag: string;
  sqlTemplate: string;
  description: string;
  classificatorId: string;
  params: Array<SqlParam>;
}

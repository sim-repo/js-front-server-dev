import {SqlParam} from "./sql-param";

export class SqlTemplate{
  tag: string;
  sqlTemplate: string;
  description: string;
  link: string;
  params: Array<SqlParam>;
}

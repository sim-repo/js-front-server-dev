import {Pipe, PipeTransform} from "@angular/core";

@Pipe({ name: 'getJsonColKeys' })
export class KeysPipe implements PipeTransform {
  transform(value, args: string[]): any {
    if(value!==undefined) {
      return Object.keys(value);
    }
    return ;
  }
};

@Pipe({ name: 'getJsonValues' })
export class ValuesPipe implements PipeTransform {
  transform(value, keyf: string[],m: string[]) : any {
    if(value!==undefined) {
      let flag: boolean = false;
      let keys = Object.keys(value);
      let arr = keys.map(k => value[k]);
      return arr;
    }
    return;
  }
}

@Pipe({ name: 'paginate' })
export class PaginatePipe implements PipeTransform {
  transform(collection: Array<any>,  itemsPerPage:number, currentPage:any) : any {
    let start = (currentPage==1)?0:(currentPage-1) * itemsPerPage;
    if(collection.length > (start + itemsPerPage)) {
      return collection.slice(start, start + itemsPerPage);
    }
    return collection.slice(start,collection.length);
  }
}

@Pipe({
  name: "sort",
   pure: false
})
export class SortPipe implements PipeTransform {

  transform(array: Array<any>, orderField: string, orderType: boolean): Array<string>{
    if(orderField === undefined)
      return array;
    array.sort( ( a: any, b: any ) => {
      let ae = a.data[ orderField ];
      let be = b.data[ orderField ];
      if ( ae == undefined && be == undefined ) return 0;
      if ( ae == undefined && be != undefined ) return orderType ? 1 : -1;
      if ( ae != undefined && be == undefined ) return orderType ? -1 : 1;
      if ( ae == be ) return 0;
      return orderType ? (ae.toString().toLowerCase() > be.toString().toLowerCase() ? -1 : 1) : (be.toString().toLowerCase() > ae.toString().toLowerCase() ? -1 : 1);
    } );


    return array.slice(0,array.length);
  }
}

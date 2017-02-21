import {FormControl, FormGroup} from "@angular/forms";

export class HashLookup{
  columns: Array<string>;
  mapColumns: Map<any,number> = new Map();
  items: Map<string,Array<number>> = new Map();
}

export class Line{
  data: Array<any>
}

export class GridItem{
  column: string;
  filter: string;
}

export class GridFilter{
  items: Array<GridItem> = [];
  hash: HashLookup = new HashLookup();
  mapLines: Map<number,Line> = new Map();
  lineCnt: number = 0;
  lines: Array<Line> = [];


  createForm(_json: Array<any>){

    //columns
    let keys = Object.keys(_json[0]);
    this.hash.columns = keys;

    var no: number=0;
    keys.map(k=>{
      this.hash.mapColumns.set(k,no++);
      this.items.push({column:k, filter:""});
    })

    //values
    keys = Object.keys(_json);
    let values = keys.map(k => _json[k]);


    for(var stroke=0; stroke < values.length; stroke++) {
      let o = values[stroke];
      this.lineCnt++;

      let oneRow = [];
      for (var key in values[stroke]) {
        oneRow.push(o[key]);

        if(this.hash.items.has(o[key]+key)){
          let a: Array<number> = this.hash.items.get(o[key]+key);
          a.push(this.lineCnt);
          this.hash.items.set(o[key]+key,a);
        }else{
          let b: Array<number> = [];
          b.push(this.lineCnt);
          this.hash.items.set(o[key]+key,b);
        }
      }
      let line: Line = {data: oneRow};
      this.mapLines.set(this.lineCnt, line);
      this.lines.push(line);
    }


    let group: any = {};
    group['gridFilter'] =  new FormControl(this || '');
    this.items
      .forEach(item=>{
        group[item.column] =  new FormControl();
      });
    return new FormGroup(group);
  }



  doFilter(): Array<Line>{
    let lmap: Map<number,number> = new Map();
    var filterCnt=0;

    if (this.items.length===0)
      return null;

    for(var i=0; i<this.items.length; i++) {
      if (this.items[i].filter === null || this.items[i].filter === "")
        continue;

      filterCnt++;

      let key = this.items[i].filter + this.items[i].column;
      let lines = this.hash.items.get(key);

      if (lines != undefined) {
        for (var j = 0; j < lines.length; j++) {
          if (!lmap.has(lines[j])) {
            lmap.set(lines[j], 1);
          } else {
            let freq = lmap.get(lines[j]);
            lmap.set(lines[j], ++freq);
          }
        }
      }
    }

    if (filterCnt == 0)
      return null;

    let res: Array<Line> = [];
    lmap.forEach((v,k)=>{
      if(v===filterCnt){
        res.push(this.mapLines.get(k));
      }
    });
    return res;
  }

  getColumns(): Array<string>{
    return this.hash.columns;
  }

  getLines():Array<Line>{
    return this.lines;
  }

  getNewLines(arr: Array<Line>):Array<Line>{
    //only for forcing redraw
    //TODO: optimized in future
    let t:Array<Line> = new Array<Line>();

    for(var i=0;i<arr.length;i++){
      let oneRow = [];
      for(var j=0; j<arr[i].data.length; j++){
        oneRow.push(arr[i].data[j]);
      }
      let newLine: Line = {data: oneRow};
      t.push(newLine);
    }
    return t;
  }

  getColumnNo(_key):number{
    return this.hash.mapColumns.get(_key);
  }

  destroy(){
    this.hash = null;
    this.mapLines = null;
    this.lineCnt = null;
    this.lines = null;
    this.items = null;
  }
}


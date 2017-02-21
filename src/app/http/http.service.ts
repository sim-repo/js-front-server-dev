import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Response, Http, Headers, RequestOptions} from "@angular/http";

@Injectable()
export class HttpService{

  constructor(private http: Http){}


  getData(_url: string):Observable<any[]>{
    return this.http.get(_url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  postJson(_url: string, _data: any): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    var jbody = JSON.stringify(_data);
    return this.http.post(_url, jbody, {headers: headers})
      .map(this.extractData)
      .catch(this.handleError);
  };

  private extractData(res: Response){
    return res.json();
  }

  private handleError(error: Response | any){
    let errMsg: string;
    if(error instanceof Response){
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }
    else{
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }
}


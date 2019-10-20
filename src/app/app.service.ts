import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/publishReplay'
import 'rxjs/add/observable/of';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  public url: string = 'https://jsonplaceholder.typicode.com/posts'

  getAPI():  Observable<any> {
    let headers = new Headers({'Content-Type' : 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.get(this.url, options)
        .publishReplay().refCount()
        .map((response: Response) => <any> response.json())
        .do(data => {})
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    if(error.status == 504 || error.status == 502 || error.status == 503){
        return Observable.of("");
    }else{
       return Observable.of(JSON.stringify(error) || 'Server error');
    }
}

}

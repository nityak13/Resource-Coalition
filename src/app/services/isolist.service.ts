import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class IsolistService {

  //iso_list : string;
  private baseUrl = 'api/iso_list';

  constructor(private http: Http) { }

  getISO() : Observable <String[]> {
    return this.http.get(this.baseUrl)
      .map(this.extractData)
      .do(data => console.log('Received iso data'))
      .catch(this.handleError);
  }

  private extractData(response: Response) {
    let body = response.json();
    return body.data || body || {};
  }

  private handleError(error: Response): Observable<any> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
